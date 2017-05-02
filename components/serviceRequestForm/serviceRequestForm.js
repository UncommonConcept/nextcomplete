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
        showForm: true,
        date: undefined,
      };
      this.confirmPageSubmit = this.confirmPageSubmit.bind(this);
      this.dateChange = this.dateChange.bind(this);
    }
    
    confirmPageSubmit (values){
      this.props.confirmPage(values);
      this.setState({showForm: !this.state.showForm}); 
    }
    
    dateChange(date){
      console.log("i am might date changeMADE IT", date);
      this.setState({date:date})
    }

  render () {   
    return (
     <div>
        <Form
          onSubmit={(values) => {
            console.log('Success!', values, this.state.date)
            this.confirmPageSubmit(values);
            //uncomment the below two lines to activate email delivery
             //emailjs.init(emailJs.userLogin);
             //emailjs.send("default_service","template_pWhzP98u",{name: "James",message_html: "Service Request "});
            
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
                <Text className="form" field='name' placeholder = "name" />
                <Text field='email' placeholder = "email" />
                <div className ="form-group" >
                  <Textarea field='issue' placeholder = "issue" rows="5" />
                </div>
                  <DatePicker dateChange={this.dateChange}/>  
                {/*<button
                      className="g-recaptcha"
                      data-sitekey={emailJs.siteCaptcha}
                      data-callback="YourOnSubmitFn">
                      Submit Captura
                      </button>
                      */}
                <button type='submit' >Submit</button>
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
      this.confirmPage = this.confirmPage.bind(this);
    }

    confirmPage (values){
      console.log("i jusg cfrom request Formhanged", this.state, values)

      this.setState({showForm: !this.state.showForm});
    }

  render () {   
    console.log('a',this.props)
    return (
      <div>
        {this.state.showForm ? <ServiceRequestForm confirmPage={this.confirmPage}/> :null}
        {/*{this.state.showForm ? <button type='submit' onClick = {this.confirmPage}>Submit</button> :null}*/}
        {!this.state.showForm ? <ThankYouConfirm/> : null}

      </div>
    )
  }
}

export default RequestForm;

