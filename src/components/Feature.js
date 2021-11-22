import requireAuth from '../requireAuth';

const Feature = () => {
  return <div>Feature component testtttttt</div>;
};

export default requireAuth(Feature);
