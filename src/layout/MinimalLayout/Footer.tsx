import React, {useEffect} from 'react';

function Footer() {

    useEffect(() => {
        console.log('footer component is loaded');
    })
    
    return (
        <h3 className="p-4 m-2 border-2 border-indigo-600">This is footer component</h3>
    );
}

export default Footer;