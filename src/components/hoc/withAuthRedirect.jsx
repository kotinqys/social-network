import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

function withAuthRedirect(Component) {
  return (props) => {
    const { isAuth } = useSelector((state) => ({
      isAuth: state.auth.isAuth,
    }));
    if (!isAuth) return <Redirect to='/login' />;
    return <Component {...props} />;
  };
}

export default withAuthRedirect;
