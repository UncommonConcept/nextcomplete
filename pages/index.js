import Layout from 'components/MyLayout.js';
import Link from 'next/link';

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const index = () => (
    <Layout title='Plano McKinney Complete Air and Heat'>
      <h1>Complete Air and Heat Service - DFW </h1>
      <h2 className='example'>Service</h2>
      <ol>
        <ul>
          Solar Attic Ventilation is the state of the art in Ventilation .  it requires no electricity to operate only the self contained solar panel kit.  That means you save big $$$ by not needing an electrician and your savings start immediately.
            </ul>
        <ul>
          Attic Insulation make sure your home is insulated properly.   We offer fiberglass and cellulose insulation to insulate your home and make it the most efficient it can be !
            </ul>
        <ul>
          We repair and replace all makes and models, Repair or Design/replace duct systems, Air quality control &amp; Hepa filtration systems, UV Lights &amp;  Ozone air scrubbers, solar attic ventilation, attic insul
            </ul>

        Air Conditioning tune-up, and air conditioning replacement services in Southlake, TX, Keller, TX,
            Coppell, TX, Colleyville, TX,
            Grapevine, TX, Plano, TX,
            Arlington, TX, Frisco, TX, Dallas, TX, Addison, TX,
            Flower Mound, TX, Irving, TX, McKinney, TX,
            Arlington, TX, Euless, TX, Denton, TX,
            Highland Village, TX, Grand Prairie, TX,
            Farmers Branch, TX, Lewisville, TX, Mesquite, Allen, Whylie, Garland, Sachse,
            Richardson, Lucas, Parker, Princeton, Melissa, Little Elm,
            Rockwall, Rowlett, Murphy, Carrollton.
              Call to confirm service for your home.
          </ol>
      <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
          <i className="material-icons">play_circle_filled</i>
        </header>
        <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
          <div className="mdl-card__supporting-text">
            <h4>Features</h4>
            Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse.
                </div>
          <div className="mdl-card__actions">
            <a href="#" className="mdl-button">Read our features</a>
          </div>
        </div>
        <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
          <i className="material-icons">more_vert</i>
        </button>
        <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" htmlFor="btn1">
          <li className="mdl-menu__item">Lorem</li>
          <li className="mdl-menu__item" disabled>Ipsum</li>
          <li className="mdl-menu__item">Dolor</li>
        </ul>
      </section>
    </Layout>
);

export default index;
