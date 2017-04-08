import Layout from '../components/MyLayout.js'
import { aboutMatt, aboutService } from './content.js';

export default () => (
    <Layout>
        <h2>About Time </h2>
       <p>
           {aboutMatt}
        </p>
    </Layout>
)
