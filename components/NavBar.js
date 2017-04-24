import Router from 'next/router';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const NavBar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link prefetch className="navbar-brand" href="/"><a>Complete Air and Heat Service</a></Link>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="nada"><Link prefetch href="/contact"><a>Service Request <span className="sr-only">(current)</span></a></Link></li>
          <li><Link prefetch href="/about"><a>About</a></Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
