import React, {useState, useEffect} from 'react';
//import { useNavigate } from 'react-router-dom';
import router from './../../routes';

function Header(props) {

    useEffect(() => {
        console.log('header component is loaded');
    })
    
    //const navigate = useNavigate();

    const logout = (e) => {
        localStorage.removeItem('token');
        router.navigate('/login')
        //navigate('/login');
    }

    return (
        <header className="antialiased p-4 m-2 border-2 border-indigo-600">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                this is header component
            </nav>

            <button type="button" onClick={logout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button>
           
        </header>
    );
}

export default Header;