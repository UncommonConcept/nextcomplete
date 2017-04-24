import React, { Component } from 'react'
import 'isomorphic-fetch';
import firebase from 'firebase'
import { clientCredentials } from 'server/firebaseCredentials';

export default function withFirebase(WrappedComponent) {
  return class extends Component {
    static async getInitialProps ({ req, query, renderPage }) {
      // Any other variables can be created as high-level props here
      const snap = await req.firebaseServer.database().ref('messages').once('value');
      return { messages: snap.val() };
    }

    constructor (props) {
      super(props)
      this.state = {
        messages: this.props.messages,
      };
    }

    componentDidMount () {
      firebase.initializeApp(clientCredentials);
      this.addDbListeners();
    }

    componentWillUnmount () {
      firebase.database().ref('messages').off()
    }

    addDbListeners = () => {
      firebase.database().ref('messages').on('value', snap => {
        const messages = snap.val()
        if (messages) { this.setState({ messages }); }
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
      const { messages } = this.state
      return <WrappedComponent messages={messages} {...this.props} />
    }
  }
}
