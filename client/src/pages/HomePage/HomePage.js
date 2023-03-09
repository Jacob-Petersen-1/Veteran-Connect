import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

//MUI Components Imports
import AppBarUser from '../../components/AppBar/AppBar';
import { Grid } from '@mui/material';
import PostFeed from '../../components/PostFeed/PostFeed';

const HomePage = () => {
    const[user,token] = useAuth()
    
    
    return ( 
    <>
        <AppBarUser/>
        <PostFeed/>


        
    </> );
}
 
export default HomePage;