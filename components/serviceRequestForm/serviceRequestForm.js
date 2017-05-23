import { Form, Text, Textarea } from 'react-form';
import Router from 'next/router';
import DatePicker from './datepicker';
import { emailJs } from '../../server/emailJsCredentials';
import withFirebase from 'components/withFirebase';
import React from 'react'
import { PureComponent } from 'react'



class ServiceRequestForm extends PureComponent {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  constructor (props) {
      super(props)
      this.state = {
        date: undefined,
      };
    }

    confirmPageSubmit = (values) => {
      this.props.confirmPage(values);
    }

    dateChanged = (date) => {
      console.log("i am might date changeMADE IT", date);
      this.setState({date: date})
    }

  render () {
    return (
     <div>
        <Form
          onSubmit={(values) => {
            console.log('Success!', values, this.state.date)
            this.confirmPageSubmit(values);
            //uncomment the below two lines to activate email delivery
            {emailjs.init(emailJs.userLogin);
            emailjs.send("default_service","template_pWhzP98u",{name: values.name, email: values.email,  issue: values.issue, dateRequested: this.state.date['_d']});}
          }}

          validate={({ name }) => {
            return {
              name: !name ? 'A name is required' : undefined
            }
          }}
        >
          {({submitForm}) => {
            return (
              <div>
                  <form className="form-appointment" onSubmit={submitForm}>
                    <h2 className="serviceHeader"> Service Request Form </h2>
                      <Text className="form mt20" field='name' placeholder = "name" />
                      <Text className="mt20" field='email' placeholder = "email" />
                      <div className ="form-group mt20" >
                        <Textarea field='issue' placeholder = "brief description of issue" rows="5" />
                      </div>
                        <DatePicker dateChange={this.dateChanged}/>
                {/*<button
                      className="g-recaptcha"
                      data-sitekey={emailJs.siteCaptcha}
                      data-callback="YourOnSubmitFn">
                      Submit Captura
                      </button>
                      */}
                <div>
                  <button type='submit' className="btn btn-success submitButton">Send Request</button>
                </div>
              </form>
          </div>
            )
          }}
        </Form>
      </div>
      )
    }
}

const ThankYouConfirm=()=>{
  return (
    <div className = "form-appointment">Thank you</div>
  )
}




class RequestForm extends PureComponent {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  constructor (props) {
      super(props)
      this.state = {
        showForm: true,
      };
    }

    confirmPage = (values) => {
      // console.log("i jusg cfrom request Formhanged", this.state, values)

      this.setState({showForm: false});
    }

  render () {
    console.log('a',this.props)
    return (
      <div>
        {this.state.showForm ? <ServiceRequestForm confirmPage={this.confirmPage}/> : <ThankYouConfirm />}
      </div>
    )
  }
}

export default RequestForm;

