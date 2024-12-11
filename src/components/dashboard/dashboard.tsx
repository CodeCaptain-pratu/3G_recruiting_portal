import React, { useEffect } from 'react';

export default function Dashboard() {

    useEffect(() => {
        console.log('dashboard component is loaded');
    });

    return (
        <div className="border-2 border-green-600 p-4 m-2 w-3/4"> dashboard content </div>
    );

}