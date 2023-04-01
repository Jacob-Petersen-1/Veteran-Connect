import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import  axios  from "axios";

//MUI Imports
import { Avatar, Container, Box, Typography, Grid, Paper } from "@mui/material";

const Profile = () => {
  const [token] = useAuth();
  const {userProfile} = useParams()
  const [profile,setProfile] = useState()

  

  const getUserProfile = async () => {
    const apiUrl = `/api/profile/user/${userProfile}`
    try {
        let response = await axios.get(apiUrl,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        setProfile(response.data)
    } catch (error) {
        console.error(error.message)
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [userProfile]);




  return (
    <Container>
        {/* <Grid >
          <Grid item xs={12}>
            <Paper
              sx={{
                padding: 5,
                textAlign: "center",
               
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="Profile Picture"
                src={profile.user.avatar}
                sx={{ width: 250, height: 250, my:4 }}
              />
              <Typography variant="h4" >
                {profile.user.name}
              </Typography>
              <Typography variant="h6" >
                {profile.status}
              </Typography>
              <Typography variant="body1" component="p">
                {profile.bio}
              </Typography>
            </Paper>
          </Grid>
        </Grid> */}

        {console.log(profile)}
   

    </Container>
  );
};

export default Profile;
