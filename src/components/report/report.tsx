import React, {Component, useEffect} from 'react';

export default function Report() {

    useEffect(() => {
        console.log('report component is loaded');
    })

    return (
        <div className="border-2 border-green-600 p-4 m-2"> display reports page </div>
    );
  }