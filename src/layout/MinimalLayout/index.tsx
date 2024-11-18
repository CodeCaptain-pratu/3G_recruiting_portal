import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import LHS from './LHS';
import Footer from './Footer';

// ==============================|| MINIMAL LAYOUT ||============================== //

export default function MinimalLayout() {
  return (
    <div>
      <Header />
      <LHS />
      <Outlet />
      <Footer />
    </div>
  );
}
