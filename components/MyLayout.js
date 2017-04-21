import Header from './Header'
import NavBar from './NavBar'
import { serviceRequestForm } from '../forms/serviceRequestForm';

const layoutStyle = {
 //backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/completeair/service-ac-repair-big.jpg)',
		//backgroundPosition: center,
		//	backgroundRepeat:  repeat,
		//	backgroundAttachment: fixed,
//	 backgroundImage:{ resizeMode: 'cover'},
  marginLeft: 50,
}
const backgroundImageStyle = {
  resizeMode: 'cover',
  opacity: 0.2,
  font: 'bold',
  zIndex: 2,
}

const Layout = (props) => (
  <div style={layoutStyle}>
    
    <Header />
    <NavBar />
    <div id="background" style={backgroundImageStyle}>
      <img src="https://s3-us-west-2.amazonaws.com/completeair/service-ac-repair-big.jpg" className="stretch" alt="" />
    </div>
    {props.children}
    {serviceRequestForm}
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
)

export default Layout
