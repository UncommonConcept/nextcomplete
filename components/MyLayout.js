import Header from './Header'
import NavBar from './NavBar'

const layoutStyle = {
 //backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/completeair/service-ac-repair-big.jpg)',
		//backgroundPosition: center,
		//	backgroundRepeat:  repeat,
		//	backgroundAttachment: fixed,
//	 backgroundImage:{ resizeMode: 'cover'},


}

const Layout = (props) => (
  <div style={layoutStyle}>
    
    <Header />
    <NavBar />
    <div id="background">
      <img src="https://s3-us-west-2.amazonaws.com/completeair/service-ac-repair-big.jpg" class="stretch" alt="" />
    </div>
    {props.children}
  </div>
)

export default Layout
