import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const requireAuth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    const { auth } = useSelector((state) => state.auth);
    let navigate = useNavigate();
    useEffect(() => {
      if (!auth) {
        navigate('/');
      }
    }, [auth, navigate]);
    //propsy karam chgrem estex nuyn dzevova ashxatum
    return <ChildComponent {...props} />;
  };
  return ComposedComponent;
};

export default requireAuth;
