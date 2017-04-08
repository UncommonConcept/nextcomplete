import Layout from '../components/MyLayout.js'
import { aboutMatt, aboutService, poop } from './content.js';
import { myForm } from '../forms/serviceRequestForm';





export default () => (
    <Layout>
        <h2>About Time </h2>
       <p>
           {aboutMatt()}
           {poop()}
           {myForm}
        </p>
    </Layout>
)
