import React, {Component, useEffect} from 'react';

function Company() {

    useEffect(() => {
        console.log('company component is loaded');
    })

    return (
        <div className="border-2 border-green-600 p-4 m-2"> display company page </div>
    );
  }

export default Company;