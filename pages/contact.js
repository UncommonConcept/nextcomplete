import Layout from '../components/MyLayout.js'
import { myForm } from '../forms/serviceRequestForm';



export default () => (
    <Layout>
        <h2>Request Service </h2>
        You can schedule a service request by submitting the form below
      <div className="mdl-layout mdl-js-layout">
           {myForm}
           OR if you prefer by phone:<br></br>
           972-246-7484<br></br>
       </div>
    </Layout>
)
