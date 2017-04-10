import Link from 'next/link';


const linkStyle = {
  marginRight: 15
}

const NavBar = () => (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">  
            <span className="mdl-layout-title">Complete AC Air and Heat Services</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
                <Link href="/">
                    <a className="mdl-navigation__link">Home</a>
                </Link>
                 <Link href="/about">
                    <a className="mdl-navigation__link">About</a>
                 </Link>
                  <Link href="/contact">
                    <a className="mdl-navigation__link">Servie Request</a>
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