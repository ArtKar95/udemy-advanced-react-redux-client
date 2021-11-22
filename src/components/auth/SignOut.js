import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../actions';

const SignOut = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signOut());
  }, [dispatch]);
  return <div>Bi bro</div>;
};

export default SignOut;
