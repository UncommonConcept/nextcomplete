import React from 'react'
import ServiceRequestForm from './serviceRequestForm';




export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  render () {   
    return (
    <div>
      <ServiceRequestForm />
    </div>
    )
  }
}
