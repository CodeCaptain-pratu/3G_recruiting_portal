import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from './Header';
import LHS from './LHS';
import Footer from './Footer';
import axios from 'axios';
import { API_URL } from '../../config';

// ==============================|| MINIMAL LAYOUT ||============================== //

export default function MinimalLayout() {

  const [user, setUser] = useState({});

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
      console.log('user is verified!');
      setUser(response.data);
    })
    .catch(error => {
      navigate('/login');
    })

    // validate token
  }, [])

  return (

    <>
      <Header data={user} />
      <div className="flex m-2 border-2 border-indigo-600 h-80">
        <LHS />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
