import React, { lazy, Component } from 'react';

// project import
import Loadable from './../components/Loadable';
import MinimalLayout from '../layout/MinimalLayout';
//import Dashboard from 'layout/Dashboard';

// render - sample page
const Users = Loadable(lazy(() => import('./../components/user/users/users')));
const CreateUser = Loadable(lazy(() => import('./../components/user/create/create-user')));
const Dashboard = Loadable(lazy(() => import('./../components/dashboard/dashboard')));

const Company = Loadable(lazy(() => import('./../components/company/company')));
const Report = Loadable(lazy(() => import('./../components/report/report')));

// ==============================|| MAIN ROUTING ||============================== //

const ProtectedRoutes = {
  path: '/hrms',
  element: <MinimalLayout />,
  children: [
    {
      path: 'dashboard',
      element: <Dashboard />
    },
    {
      path: 'create-user',
      element: <CreateUser />
    },
    {
      path: 'users',
      element: <Users />
    },
    {
      path: 'company',
      element: <Company />
    },
    {
      path: 'report',
      element: <Report />
    }
  ]
};

export default ProtectedRoutes;
