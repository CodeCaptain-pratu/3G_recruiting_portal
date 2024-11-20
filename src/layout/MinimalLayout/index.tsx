import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from './Header';
import LHS from './LHS';
import Footer from './Footer';
import axios from 'axios';
import { API_URL } from '../../config';

// ==============================|| MINIMAL LAYOUT ||============================== //

export default function MinimalLayout() {

  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token')) {
      navigate('/login');
      return;
    }

    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }

    axios.get(API_URL + '/v1/users/api/get/current', {headers: headers})
    .then(response => {
      console.log('user is verified!')
    })
    .catch(error => {
      navigate('/login');
    })


    // validate token
  })

  return (
    <div>
      <Header />
      <LHS />
      <Outlet />
      <Footer />
    </div>
  );
}
