import React from 'react'
import { serviceRequestForm } from './serviceRequestForm';




export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  render () {   
      console.log("service reque", serviceRequestForm)
    return (
    <div>
      {serviceRequestForm}
    </div>
    )
  }
}
