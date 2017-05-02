import React, { Component } from 'react'
import 'isomorphic-fetch';
import firebase from 'firebase'
import { clientCredentials } from 'server/firebaseCredentials';

export default function withFirebase(WrappedComponent) {
  return class extends Component {
    static async getInitialProps ({ req, query, renderPage }) {
      // Any other variables can be created as high-level props here
      const snap = await req.firebaseServer.database().ref('services').once('value');
      return { services: snap.val() };
    }

    constructor (props) {
      super(props)
      this.state = {
        services: this.props.services,
      };
    }

    componentDidMount () {
      firebase.initializeApp(clientCredentials);
      this.addDbListeners();
    }

    componentWillUnmount () {
      firebase.database().ref('services').off()
    }

    addDbListeners = () => {
      firebase.database().ref('services').on('value', snap => {
        const services = snap.val()
        if (services) { this.setState({ services }); }
      })
    }

    // updateUserState (user) {
    //   if (user) {
    //     database().ref('posts').on('value', snap => this.updateMessages(snap.val()))
    //   } else {
    //     database().ref('posts').off()
    //   }
    //   store.user = user
    //   this.setState({ user })
    // }

    // updateMessages (posts) {
    //   store.messages = posts
    //   this.setState({ posts })
    // }

    render () {
      const { services } = this.state
      return <WrappedComponent services={services} {...this.props} />
    }
  }
}
