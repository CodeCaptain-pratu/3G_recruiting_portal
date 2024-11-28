import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import LHS from './LHS';
import Footer from './Footer';
import axios from 'axios';
import { API_URL } from '../../config';

import router from './../../routes';

export default function MinimalLayout() {

  //const navigate = useNavigate();

  const [user, setUser] = useState();

  useEffect(() => {

    console.log('main parent component is loaded');

    if(!localStorage.getItem('token')) {
      router.navigate('/login');
      return;
    }

    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }

    axios.get(API_URL + '/v1/users/api/get/current', {headers: headers})
    .then(response => {
      console.log(response)
      //setUser(response.data)
    })
    .catch(error => {
      router.navigate('/login');
    })


    // validate token
  }, [])

  return (
<<<<<<< HEAD
    <div>
      <Header/>
=======
    <>
      <Header />
>>>>>>> b98881136c47e42a304fa48398cc541d6d1a3bae
      <LHS />
      <Outlet />
      <Footer />
    </>
  );
}
