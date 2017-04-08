import Layout from '../components/MyLayout.js'
import { aboutMatt, aboutService, poop } from './content.js';
import { Form, Text } from 'react-form';


const myForm = (
  <Form
    onSubmit={(values) => {
      console.log('Success!', values)
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


export default () => (
    <Layout>
        <h2>About Time </h2>
       <p>
           {aboutMatt()}
           {myForm}
           {poop()}
        </p>
    </Layout>
)
