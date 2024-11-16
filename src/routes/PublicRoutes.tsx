import React, { lazy, Component } from 'react';

// project import
import Loadable from './../components/Loadable';
import MinimalLayout from '../layout/MinimalLayout';

// render - login
const Login = Loadable(lazy(() => import('./../components/user/login/login')));

// ==============================|| AUTH ROUTING ||============================== //

const PublicRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <Login />
    }
  ]
};

export default PublicRoutes;
