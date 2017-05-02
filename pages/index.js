import Layout from 'components/Layout';
import withFirebase from 'components/withFirebase';
import Link from 'next/link';

const index = ({ services }) => (
    <Layout title='Plano McKinney Complete Air and Heat'>

      <div className="marketing">
        {/*<!-- Three columns of text below the carousel -->*/}
        <div className="row">
          <div className="col-lg-4">
            <img className="rounded-circle" src="https://s3-us-west-2.amazonaws.com/completeair/nj-air-conditioning-repair-service.jpg" alt="Generic placeholder image" width="140" height="140" />
            <h2>Repair and Replace</h2>
            <p> {services["Repair and Replace"]}</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src="https://s3-us-west-2.amazonaws.com/completeair/solarVentilation.jpeg" alt="Generic placeholder image" width="140" height="140" />
            <h2>Solar Attic Ventilation</h2>
            <p> {services["Solar Attic Ventilation"]}</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src="https://s3-us-west-2.amazonaws.com/completeair/atticInsulation.jpeg" alt="Generic placeholder image" width="140" height="140" />
            <h2>Attic Insulation</h2>
            <p> {services["Attic Insulation"]}</p>


        <div className="col-lg-4">
          <Link prefetch href="/solar"><a>Solar </a></Link>
          <Link href="/about" className="nav-link"><a>About</a></Link>
        </div>
          </div>
        </div>

        {/*<!-- START THE FEATURETTES
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 push-md-5">
            <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 pull-md-7">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
          </div>
        </div>

        {/*<!-- /END THE FEATURETTES -->*/}
      </div>

      <div>
        {/*{JSON.stringify(services)}*/}
      </div>
    </Layout>
);

export default withFirebase(index);
