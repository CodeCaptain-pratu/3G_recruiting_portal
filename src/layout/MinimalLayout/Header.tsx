import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    useEffect(() => {
        console.log('header component is loaded');
    })
    
    const navigate = useNavigate();

    const logout = (e) => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <header className="antialiased m-2 border-2 border-indigo-600 flex justify-between items-center">
            <nav className="bg-white lg:px-6 py-2.5 w-4/5 flex justify-between items-center">
                <img className='text-2xl w-20' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=206,fit=crop,q=95/AwvrzaMvGJIDZLVR/3g-infotech-avl334obqbcvdpv6__1_-removebg-preview-YBgpPZv49xcWVGzy.png"/>
                <p className='text-lg'>Username</p>
            </nav>

            <button type="button" onClick={logout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button>
           
        </header>
    );
}