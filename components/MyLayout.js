import Header from './Header'
import NavBar from './NavBar'

const layoutStyle = {
 //backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/completeair/service-ac-repair-big.jpg)',
		//backgroundPosition: center,
		//	backgroundRepeat:  repeat,
		//	backgroundAttachment: fixed,
//	 backgroundImage:{ resizeMode: 'cover'},
}
const backgroundImageStyle = {
  resizeMode: 'cover',
  opacity: 0.2,
  font: 'bold',
}

const Layout = (props) => (
  <div style={layoutStyle}>
    
    <Header />
    <NavBar />
    <div id="background" style={backgroundImageStyle}>
      <img src="https://s3-us-west-2.amazonaws.com/completeair/service-ac-repair-big.jpg" className="stretch" alt="" />
    {props.children}
    </div>
  </div>
)

export default Layout
