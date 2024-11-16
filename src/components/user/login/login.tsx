import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form submitting or reloading page
        //console.log(formData);

        const headers = {
            'Content-Type': 'application/json'
          }

        axios.post('http://3.211.38.180:8080/v1/users/api/public/login', formData, {headers: headers})
          .then(response => {
            console.log(response);
            localStorage.setItem('jwt', response.data.data)
            //route to dashboard
          })
          .catch(error => {
            console.error(error);
            // display error message on UI
          });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
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
                        <label htmlFor="username" className="mb-2 text-md text-slate-800">
                            Username :
                        </label>
                        <input type="text" name="username" placeholder="Enter your email here"
                            value = {formData.username}
                            onChange={handleChange}
                            className="w-full h-8 rounded text-slate-400 mb-2 shadow px-2 py-5 border border-slate-400" required/> 
                        <br />
                        
                        <label htmlFor="password" className="mb-2 text-md text-slate-900">Password : </label>
                        <input type="password" name="password" placeholder="Enter your password here"
                            value = {formData.password}
                            onChange={handleChange}
                            className="w-full h-8 rounded text-slate-400 mb-2 shadow px-2 py-5 border border-slate-400" required/> 
                        <br />
                        
                        <button type="submit" className="bg-indigo-600 p-2 rounded-md text-white font-bold hover:bg-indigo-500" id="submit">Sign in</button>
                        <p id="error" className="absolute top-6 left-auto bg-red-600 p-2 rounded-md text-white hidden font-semibold">error</p>

                    </form>
                </div>
            </div>
        </div>    
    );

}
