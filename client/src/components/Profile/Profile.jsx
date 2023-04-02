import React, { useState, useEffect } from "react";

//Utils
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";

//MUI Imports
import {
  Avatar,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  IconButton,
  Box
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Loader from "react-loading";
import ProfileCreationAlert from "../ProfileCreationAlert/ProfileCreationAlert";


const Profile = () => {
  const [user, token] = useAuth();
  const { userProfile } = useParams();
  const [profile, setProfile] = useState();
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [open,setOpen] = useState(false)

  const userProfileValidation = async () => {
    if (user.id === userProfile) {
      setIsOwner(true);
    }
  };


  const getUserProfile = async () => {
    const apiUrl = `/api/profile/user/${userProfile}`;
    try {
      let response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error.msg);
      setIsLoading(false)
      setOpen(true)
    }
  };

  useEffect(() => {
    userProfileValidation();
    getUserProfile();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loader type="bars" color="#ffffff" />
      </Box>
    );
  }

  if(open) {
    return(
      <ProfileCreationAlert isOwner={isOwner} open={open} setOpen={setOpen}/>
    )
  }

  return (
    <>
    <Container sx={{ maxWidth: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              padding: 10,
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
              sx={{ width: 250, height: 250, my: 4 }}
            />
            <Typography variant="h4">{profile.user.name}</Typography>
            <Typography variant="h6">{profile.status}</Typography>
            <Typography variant="body1">
              <strong>About: </strong>
              {profile.bio}
            </Typography>
            {profile.company && (
              <Typography variant="body1">
                <strong>Company: </strong> {profile.company}
              </Typography>
            )}
            {profile.website && (
              <Typography variant="body1">
                <strong>Website: </strong> {profile.website}
              </Typography>
            )}
            {profile.location && (
              <Typography variant="body1" component="p">
                <strong>Location: </strong> {profile.location}
              </Typography>
            )}
            {profile.servicebranch && (
              <Typography variant="body1" component="p">
                <strong>Service Branch: </strong> {profile.servicebranch}
              </Typography>
            )}
            <Typography variant="body1">
              <strong>Skills: </strong>
              {profile.skills && profile.skills.length > 0 ? (
                profile.skills.map((skill) => (
                  <Chip label={skill} key={skill} />
                ))
              ) : (
                <span>No skills listed</span>
              )}
            </Typography>
            {profile.social && (
              <Typography variant="body1" component="p">
                <a
                  href={`https://github.com/${profile.githubusername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <GitHubIcon sx={{ color: "white" }} />
                  </IconButton>
                </a>
                <a
                  href={`${profile.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <LinkedInIcon sx={{ color: "white" }} />
                  </IconButton>
                </a>
                <a
                  href={`https://${profile.social.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <FacebookIcon sx={{ color: "white" }} />
                  </IconButton>
                </a>
                <a
                  href={`https://${profile.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <TwitterIcon sx={{ color: "white" }} />
                  </IconButton>
                </a>
                <a
                  href={`https://${profile.social.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <InstagramIcon sx={{ color: "white" }} />
                  </IconButton>
                </a>
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
      <Paper sx={{
              padding: 5,
              textAlign: "left",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Typography variant="h6">Experience</Typography>
              <Typography variant="body1">
              <strong>Companies: </strong>
              {profile.experience && profile.experience.length > 0 ? (
                profile.experience.map((experience) => (
                  <Chip label={experience.company +" " + experience.title} key={experience} />
                ))
              ) : (
                <span>No experience listed</span>
              )}
            </Typography>
              <Typography variant="h6">Education</Typography>
              <Typography variant="body1">
              <strong>Education: </strong>
              {profile.education && profile.education.length > 0 ? (
                profile.education.map((education) => (
                  <Chip label={education.school +" " + education.degree} key={education} />
                ))
              ) : (
                <span>No experience listed</span>
              )}
            </Typography>


      </Paper>
    </Container>
    </>
  );
};

export default Profile;
