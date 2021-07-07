import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLogin = () => {
  if (localStorage.getItem('userToken')) {
    return true;
  }
  return false;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !isLogin() ? <Redirect to='/auth' /> : <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
