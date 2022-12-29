import loadable from '@loadable/component';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

const LogIn = loadable(() => import('@pages/Login/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp/SignUp'));
const Channel = loadable(() => import('@pages/Channel/Channel'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace/channel" component={Channel} />
    </Switch>
  );
};

export default App;
