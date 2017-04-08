import Layout from '../components/MyLayout.js'
import { Form, Text } from 'react-form'


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
          <Text field='name' />
          <button type='submit'>Submit</button>
        </form>
      )
    }}
  </Form>
)



export default () => (
    <Layout>
        <h2>Request Service </h2>
       <p>

        </p>
        <myForm />
    </Layout>
)
