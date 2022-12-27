import loadable from '@loadable/component';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

const LogIn = loadable(() => import('@pages/Login/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp/SignUp'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;
