import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { API_URL } from "./../../../config";

export default function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setErrorMessage('');
        e.preventDefault(); // prevent form submitting or reloading page
        //console.log(formData);

        const headers = {
            'Content-Type': 'application/json'
          }

        axios.post(API_URL + '/v1/users/api/public/login', formData, {headers: headers})
          .then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.data);
            setErrorMessage('');
            navigate('/hrms/dashboard');
          })
          .catch(error => {
            console.error(error);
            setErrorMessage(error.response.data.error);
          });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-1/2 h-screen flex justify-center flex-col items-center">
                <div className="w-1/2 flex justify-center items-center flex-col">
                    <div className="flex justify-center items-center w-1/3">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=206,fit=crop,q=95/AwvrzaMvGJIDZLVR/3g-infotech-avl334obqbcvdpv6__1_-removebg-preview-YBgpPZv49xcWVGzy.png" alt="3G infotech services logo" />
                    </div>
                    <h1 className="text-2xl font-semibold p-2 mb-4 text-center">
                        Sign in to your account
                    </h1>
                </div>        
                <div className="w-1/2 flex justify-center flex-col">
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <label htmlFor="username" className="mb-2 text-md text-slate-800 font-medium text-gray-900 dark:text-white">
                            Username :
                        </label>
                        
                        <input type="text" name="username" placeholder="Enter your username here"
                            value = {formData.username}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/> 
                        <br />
                        
                        <label htmlFor="password" className="mb-2 text-md text-slate-900 font-medium text-gray-900 dark:text-white">Password : </label>
                        <input type="password" name="password" placeholder="Enter your password here"
                            value = {formData.password}
                            onChange={handleChange}
                            
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/> 
                        <br />
                        
                        <button type="submit" className="bg-indigo-600 p-2 rounded-md text-white font-bold hover:bg-indigo-500" id="submit">Sign in</button>
                        <p id="error" className="absolute top-6 left-auto bg-red-600 p-2 rounded-md text-white hidden font-semibold">error</p>

                    </form>
                </div>
                {errorMessage && (
                <div id="alert-1" className="flex items-center p-4 mb-4 mt-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Error!</span> {errorMessage}
                    </div>
                    
                </div> 
            )}

            </div>
        </div>    
    </section>
    );

}
