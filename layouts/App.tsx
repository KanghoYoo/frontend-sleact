import loadable from '@loadable/component';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router';

const LogIn = loadable(() => import('@pages/Login/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace/Workspace'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<LogIn></LogIn>} />
      <Route path="/signup" element={<SignUp></SignUp>} />
      <Route path="/workspace/:workspace/*" element={<Workspace></Workspace>} />
    </Routes>
  );
};

export default App;
