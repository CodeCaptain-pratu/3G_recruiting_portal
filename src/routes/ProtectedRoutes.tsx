import React, { lazy, Component } from 'react';

// project import
import Loadable from './../components/Loadable';
import MinimalLayout from '../layout/MinimalLayout';
//import Dashboard from 'layout/Dashboard';

//const Color = Loadable(lazy(() => import('pages/component-overview/color')));
//const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
//const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
//const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const Users = Loadable(lazy(() => import('./../components/user/users/users')));
const CreateUser = Loadable(lazy(() => import('./../components/user/create/create-user')));

// ==============================|| MAIN ROUTING ||============================== //

const ProtectedRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/create-user',
      element: <CreateUser />
    },
    {
      path: '/users',
      element: <Users />
    }
  ]
};

export default ProtectedRoutes;
