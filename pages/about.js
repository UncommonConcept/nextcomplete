import Layout from '../components/Layout.js';
import { aboutMatt, aboutService } from './content.js';

const aboutStyle = {
  display: 'none',
};



export default () => (
    <Layout title='About Complete Air'>
        <h2>About Time </h2>
       <p>{aboutService}</p>
       <div className= "mdl-grid">
           <div className="mdl-cell mdl-cell--6-col">
               <img src={ 'https://s3-us-west-2.amazonaws.com/completeair/nj-air-conditioning-repair-service.jpg'}  width={200} height={200} />


           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo dolor, eleifend vitae urna varius, viverra rhoncus lectus. Morbi finibus arcu nec odio bibendum congue. In vitae elementum felis, eu ultrices nisl. Nullam vitae dui nulla. Mauris vitae gravida diam. Donec quis ullamcorper urna. Aliquam tristique orci at dapibus imperdiet.
Curabitur pellentesque felis non ante pellentesque maximus. Integer condimentum nunc eu augue facilisis lobortis nec ut augue. Duis at libero neque. Curabitur ut risus rhoncus, pharetra odio eget, blandit lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis nulla leo. Maecenas pellentesque sit amet lectus quis consequat. Etiam consequat, ante quis maximus consectetur, dolor metus consequat lacus, vel mollis justo erat non orci. Cras accumsan nisl a pulvinar porta. Nam placerat elit eu placerat laoreet. In elit justo, auctor a volutpat eu, auctor et eros. Aliquam velit ante, sollicitudin nec metus eget, ornare finibus ipsum. Sed interdum pellentesque enim, vitae fermentum felis feugiat ut. Maecenas maximus nisl sit amet elementum tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor nulla id volutpat porttitor.
Fusce eu ante sapien. Cras at egestas quam, a vulputate enim. Sed elementum vel augue porttitor maximus. Phasellus hendrerit interdum sem quis placerat. Sed non diam ut orci pretium consectetur. Aenean vitae lacinia risus. Sed cursus purus ligula, ac consequat enim consectetur at.
Fusce sollicitudin, tellus at luctus hendrerit, neque ex condimentum tellus, ut molestie mi quam gravida felis. In imperdiet purus vel massa consequat, non posuere velit euismod. Integer interdum purus id ullamcorper malesuada. Cras egestas sem sed enim faucibus auctor. Aenean aliquam lectus sagittis ante viverra, in pellentesque nunc volutpat. Cras ut urna eget enim iaculis maximus in ac mi. Aenean viverra porta nibh ac blandit. Suspendisse rhoncus sed dui eget euismod. Praesent pharetra id risus et lobortis. Quisque ut blandit mauris. Cras mollis lacus in nisl rhoncus egestas. Donec suscipit faucibus diam, eget rhoncus quam faucibus in. Nunc elementum ornare massa vitae fermentum.
Suspendisse sit amet dapibus libero. Sed tincidunt arcu non tempor imperdiet. Aenean at tortor sollicitudin, semper turpis non, mattis eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ac rhoncus lacus. Quisque ac risus et sapien tincidunt ultrices. Nulla a tincidunt neque. Aliquam viverra tempor neque, vitae commodo sapien pulvinar eu. Donec tempor at dolor et fermentum. Curabitur pharetra augue sed eros hendrerit suscipit. In porttitor id tortor vitae tincidunt. Curabitur dignissim ullamcorper purus a congue. Cras pellentesque, massa nec volutpat lobortis, nunc arcu ultricies velit, quis efficitur tortor lorem quis nisi.
       </div>
       <div className="mdl-cell mdl-cell--6-col" style={aboutStyle}>
            Call to confirm service for your home.

       </div>
       </div>
    </Layout>
);
