import Router from 'next/router';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <img src="https://s3-us-west-2.amazonaws.com/completeair/Screen+Shot+2017-04-28+at+9.57.27+AM.png" alt="Smiley face" width="42" height="42"/>
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
          <Link href="/about" className="nav-link"><a>About</a></Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
