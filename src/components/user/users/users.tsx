import React, {Component, useEffect} from 'react';

export default function Users() {

    useEffect(() => {
        console.log('users component is loaded');
    })

    return (
        <div className="border-2 border-green-600 p-4 m-2"> display users page </div>
    );
  }