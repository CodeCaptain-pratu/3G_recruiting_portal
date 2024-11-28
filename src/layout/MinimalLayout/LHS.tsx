import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function LHS() {
    
    const navigate = useNavigate();

    const route = (e, link) => {
        navigate(link);
    }

    return (
        <div className="p-4 m-2 border-2 border-indigo-600 flex  flex-col w-1/3">
            <button type="button" onClick={(event)=>route(event,'/hrms/users')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Users</button>
            <button type="button" onClick={(event)=>route(event,'/hrms/company')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Company</button>
            <button type="button" onClick={(event)=>route(event,'/hrms/report')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Report</button>

            <button type="button" onClick={(event)=>route(event,'/hrms/dashboard')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Dashboard</button>
        </div>
    );
}