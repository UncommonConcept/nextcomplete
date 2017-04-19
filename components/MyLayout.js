import Header from './Header'
import NavBar from './NavBar'

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
  </div>
)

export default Layout
