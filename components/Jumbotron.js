import withFirebase from 'components/withFirebase';
// this can be replaced with a hashtable, function etc. to determine.
// we may need to change this component to a class
const useJumbotron = true;

const sourceImages = [
  'https://s3-us-west-2.amazonaws.com/completeair/service-ac-repair-big.jpg',
  'https://s3-us-west-2.amazonaws.com/completeair2/hvac-ac-equipment.jpg',
  'https://s3-us-west-2.amazonaws.com/completeair2/Small-AC-Units.jpg',
];

const backgroundImageStyle = {
  resizeMode: 'cover',
  opacity: 0.2,
  font: 'bold',
  zIndex: 2,
};

const Jumbotron = ({ messages }) => {
  if(!useJumbotron) return null;

  return (
    <div className="jumbotron-fluid">
      <div className='container-fluid jumbotron-container'>
        <img className='jumbotron-background' src={sourceImages[0]} alt="AC Promotional Content" />
        <div className='jumbotron-content'>
          <h1 class="display-3">Complete Air and Heat Service</h1>
          <p class="lead">is a licensed HVAC contractor and air conditioning company offering AC repair, Air Conditioning tune-up, and air conditioning replacement services
              </p>
          {/*<p class="lead"><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
          <p class="lead">{messages}</p>*/}
        </div>
      </div>
    </div>
  );
}

export default withFirebase(Jumbotron);
