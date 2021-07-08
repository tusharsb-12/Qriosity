import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils/common';

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
