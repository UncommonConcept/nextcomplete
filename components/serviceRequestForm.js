import { Form, Text, Textarea } from 'react-form';
import Router from 'next/router';
import DatePicker from './serviceRequestForm/datepicker';



export const serviceRequestForm = (
  <div>
  <Form
    onSubmit={(values) => {
      console.log('Success!', values)
      //uncomment the below two lines to activate email delivery
       // emailjs.init("user_D5kbXTXLkTOb9bE7CYoFW");
      //  emailjs.send("default_service","template_pWhzP98u",{name: "James",message_html: "Check this out!"});
        const href = '/about'
      const as = href
      Router.push(href, as, { shallow: true })
          }}
          validate={({ name }) => {
            return {
              name: !name ? 'A name is required' : undefined
            }
          }}
  >
    {({submitForm}) => {
      return (
        <form className="panel panel-default container fluid" onSubmit={submitForm}>
          <Text className="form" field='name' placeholder = "name" />
          <Text field='email' placeholder = "email" />
          <div className ="form-group" >
            <Textarea field='issue' placeholder = "issue" rows="5" />
          </div>
            <DatePicker/>  
          <button
                className="g-recaptcha"
                data-sitekey="6LcIpxwUAAAAAHkLg5mAAnAmgL29crAbBFiGVqXW"
                data-callback="YourOnSubmitFn">
                Submit Captura
                </button>
          <button type='submit'>Submit</button>
        </form>
      )
    }}
  </Form>
  </div>
)