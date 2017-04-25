import Router from 'next/router';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

// const NavBar = () => (
//   <nav className="navbar navbar-default">
//     <div className="container-fluid">
//       <div className="navbar-header">
//         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
//           <span className="sr-only">Toggle navigation</span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//         </button>
//         <Link prefetch className="navbar-brand" href="/"><a>Complete Air and Heat Service</a></Link>
//       </div>
//       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//         <ul className="nav navbar-nav">
//           <li className="nada"><Link prefetch href="/contact"><a>Service Request <span className="sr-only">(current)</span></a></Link></li>
//           <li><Link prefetch href="/about"><a>About</a></Link></li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );

const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <Link prefetch className="navbar-brand" href="/"><a>Complete Air and Heat Service</a></Link>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link prefetch href="/contact" className="nav-link"><a>Service Request <span className="sr-only">(current)</span></a></Link>
        </li>
        <li className="nav-item">
          <Link prefetch href="/about" className="nav-link"><a>About</a></Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu" aria-labelledby="dropdown01">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>

      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
);

export default NavBar;
