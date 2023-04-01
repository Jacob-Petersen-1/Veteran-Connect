import React, { useState, useEffect } from "react";


//Utils
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import  axios  from "axios";

//MUI Imports
import { Avatar, Container, Box, Typography, Grid, Paper,Chip} from "@mui/material";
import Loader from 'react-loading'





const Profile = () => {
  const [token] = useAuth();
  const {userProfile} = useParams()
  const [profile,setProfile] = useState()
  const [loading,setIsLoading] = useState(true)

  

  const getUserProfile = async () => {
    const apiUrl = `/api/profile/user/${userProfile}`
    try {
        let response = await axios.get(apiUrl,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        setProfile(response.data)
        setIsLoading(false)
    } catch (error) {
        console.error(error.message)
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [userProfile]);

if (loading){
    return(
        <Loader type="bars" color="#ffffff"/>

    )
}


  return (
<Container>
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Paper
        sx={{
          padding: 5,
          textAlign: "center",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="Profile Picture"
          src={profile.user.avatar}
          sx={{ width: 250, height: 250, my: 4 }}
        />
        <Typography variant="h4">{profile.user.name}</Typography>
        <Typography variant="h6">{profile.status}</Typography>
        <Typography variant="body1" component="p">
          {profile.bio}
        </Typography>
        {profile.company && (
          <Typography variant="body1" component="p">
            <strong>Company: </strong> {profile.company}
          </Typography>
        )}
        {profile.website && (
          <Typography variant="body1" component="p">
            <strong>Website: </strong> {profile.website}
          </Typography>
        )}
        {profile.location && (
          <Typography variant="body1" component="p">
            <strong>Location: </strong> {profile.location}
          </Typography>
        )}
        <Typography variant="body1" component="p">
          <strong>Skills: </strong>
          {profile.skills && profile.skills.length > 0 ? (
            profile.skills.map((skill) => <Chip label={skill} key={skill} />)
          ) : (
            <span>No skills listed</span>
          )}
        </Typography>
        {profile.servicebranch && (
          <Typography variant="body1" component="p">
            <strong>Service Branch: </strong> {profile.servicebranch}
          </Typography>
        )}
        {/* {profile.social && (
          <Typography variant="body1" component="p">
            <strong>Social Media: </strong>
            {Object.entries(profile.social).map(([key, value]) => (
              <IconButton
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  className={`iconify social-icon-${key}`}
                  data-icon={`mdi:${key}`}
                  data-inline="false"
                  height="24"
                  width="24"
                />
              </IconButton>
            ))}
          </Typography>
        )} */}
      </Paper>
    </Grid>
  </Grid>
</Container>
  );
};

export default Profile;
