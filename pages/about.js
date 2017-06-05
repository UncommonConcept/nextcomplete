import Layout from '../components/Layout.js';
import { aboutMatt, aboutService } from './content.js';
import withFirebase from 'components/withFirebase';

const aboutStyle = {
  display: 'none',
};

const about = ({services}) => (
    <Layout title='About Complete Air'>
        <h2></h2>
       <div className= "mdl-grid">
           <div className="mdl-cell mdl-cell--6-col">
               <img src={ 'https://s3-us-west-2.amazonaws.com/completeair/nj-air-conditioning-repair-service.jpg'}  width={200} height={200} />


          <p>{services['About']['Matt']}</p>
          <p>{services['About']['description']}</p>
       </div>
       <div className="mdl-cell mdl-cell--6-col" style={aboutStyle}>
            Call to confirm service for your home.
       </div>
       </div>
    </Layout>
);
export default withFirebase(about);