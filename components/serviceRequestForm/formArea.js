import React from 'react'
import { serviceRequestForm } from './serviceRequestForm';




export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  onSubmit 
  render () {
    
    return (

    <div>
      Hello World {this.props.userAgent}
      {serviceRequestForm}
    </div>
    )
  }
}
