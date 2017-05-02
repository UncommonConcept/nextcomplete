import FormArea  from './serviceRequestForm/formArea';
import DocumentTitle from 'react-document-title';

const Layout = (props) => (
  <DocumentTitle title={props.title}>
    <div className='layout-container'>

      {props.children}

      <FormArea />

      <div className = "bootstrap something">
        Complete AC and Heat is a licensed HVAC contractor and air conditioning company offering AC repair,
            Air Conditioning tune-up, and air conditioning replacement services in Southlake, TX, Keller, TX,
            Coppell, TX, Colleyville, TX,
            Grapevine, TX, Plano, TX,
            Arlington, TX, Frisco, TX, Dallas, TX, Addison, TX,
            Flower Mound, TX, Irving, TX, McKinney, TX,
            Arlington, TX, Euless, TX, Denton, TX,
            Highland Village, TX, Grand Prairie, TX,
            Farmers Branch, TX, Lewisville, TX, Mesquite, Allen, Whylie, Garland, Sachse,
            Richardson, Lucas, Parker, Princeton, Melissa, Little Elm,
            Rockwall, Rowlett, Murphy, Carrollton.</div>
    </div>
  </DocumentTitle>
);

Layout.defaultProps = {
  title: 'Plano McKinney Complete Air and Heat',
};

export default Layout;
