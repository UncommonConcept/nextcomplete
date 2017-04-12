import { Form, Text } from 'react-form';


export const myForm = (
  <Form
    onSubmit={(values) => {
      console.log('Success!', values)
       //parameters: service_id, template_id, template_parameters
        emailjs.init("user_D5kbXTXLkTOb9bE7CYoFW");
        emailjs.send("default_service","template_pWhzP98u",{name: "James", notes: "Check this out!"});
    }}
    validate={({ name }) => {
      return {
        name: !name ? 'A name is required' : undefined
      }
    }}
  >
    {({submitForm}) => {
      return (
        <form onSubmit={submitForm}>
          <Text field='name' placeholder = "name" />
          <Text field='email' placeholder = "email" />
          <Text field='date' placeholder = "date" />
          <Text field='time' placeholder = "time" />
          <Text field='issue' placeholder = "issue" />
          <button type='submit'>Submit</button>
        </form>
      )
    }}
  </Form>
)