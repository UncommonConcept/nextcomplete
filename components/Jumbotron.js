import withFirebase from 'components/withFirebase';
// this can be replaced with a hashtable, function etc. to determine.
// we may need to change this component to a class
const useJumbotron = true;

const Jumbotron = ({ messages }) => {
  if(!useJumbotron) return null;

  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Complete AC & Heat</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
        <p>{messages}</p>
      </div>
    </div>
  );
}

export default withFirebase(Jumbotron);