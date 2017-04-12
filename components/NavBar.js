import Link from 'next/link';


const linkStyle = {
  marginRight: 15
}

const NavBar = () => (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">  
            <Link className="mdl-layout-title" href="/"><span >Complete AC Air and Heat Services</span></Link>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
                  <Link prefetch href="/contact">
                    <a className="mdl-navigation__link">Service Request</a>
                 </Link>
                 <Link prefetch href="/about">
                    <a className="mdl-navigation__link">About</a>
                 </Link>
            </nav>
            </div>
        </header>
    <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
            <nav className="mdl-navigation">
            <Link href="/">
                    <a className="mdl-navigation__link">Home</a>
                </Link>
                <Link href="/about">
                <a className="mdl-navigation__link">About</a>
                </Link>
            </nav>
    </div>
    <main className="mdl-layout__content">
        <div className="page-content"></div>
    </main>
    </div>
)

export default NavBar