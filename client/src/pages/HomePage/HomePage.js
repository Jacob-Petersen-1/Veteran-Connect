import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const HomePage = () => {
    const[user,token] = useAuth()
    
    
    return ( 
    <div>
        <h1>HomePage</h1>
       {console.log("User in homepage",user)}
    </div> );
}
 
export default HomePage;