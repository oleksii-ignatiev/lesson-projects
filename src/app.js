import React from 'react';
import './theme/index.scss';

import { Login } from './login';
import { Registration } from './registration';
import { Profile } from './profile';
// import { Dashboard } from './dashboard';
// import { Dashboard } from './dashboardWithQuestion1';
// import { Dashboard } from './dashboardWithQuestion2';
import { Dashboard } from './dashboardWithQuestion3';

export const App = () => {
  return (
    <>
      <Login />
      {/*<Registration />*/}
      {/*<Profile />*/}
      {/*<Dashboard />*/}
    </>
  )
};
