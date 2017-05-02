import React from 'react'
import ServiceRequestForm from './serviceRequestForm';




export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  constructor (props) {
      super(props)
      this.state = {
        requestForm: true,
      };
    }

  render () {   
    return (
    <div>
     {this.state.requestForm ?  <ServiceRequestForm /> : null}
    </div>
    )
  }
}
