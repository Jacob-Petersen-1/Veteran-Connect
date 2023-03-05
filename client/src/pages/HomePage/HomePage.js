import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

//MUI Components Imports
import AppBarUser from '../../components/AppBar/AppBar';

const HomePage = () => {
    const[user,token] = useAuth()
    
    
    return ( 
    <div>
        <AppBarUser/>
       {console.log("User in homepage",user)}
    </div> );
}
 
export default HomePage;