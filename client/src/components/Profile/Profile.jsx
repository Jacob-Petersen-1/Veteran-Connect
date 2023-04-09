import React, { useState, useEffect } from "react";

//Utils
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as moment from "moment";

//MUI Imports
import {
  Avatar,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  IconButton,
  Box,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Loader from "react-loading";
import ProfileCreationAlert from "../ProfileCreationAlert/ProfileCreationAlert";
import ProfileGithub from "../ProfileGithub/ProfileGithub";

const Profile = () => {
  const [user, token] = useAuth();
  const { userProfile } = useParams();
  const [profile, setProfile] = useState();
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

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
      setIsLoading(false);
      setOpen(true);
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

  if (open) {
    return (
      <ProfileCreationAlert isOwner={isOwner} open={open} setOpen={setOpen} />
    );
  }

  return (
    <>
      <Container sx={{ maxWidth: "100%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              sx={{
                padding: 6,
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
        <Paper
          sx={{
            padding: 5,
            textAlign: "left",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: 1,
          }}
        >
          <Typography variant="body1">
            <strong>Companies: </strong>
            <br></br>
            {profile.experience && profile.experience.length > 0 ? (
              profile.experience.map((experience) => (
                <Typography variant="body2" key={experience}>
                  Company Name: {experience.company}:
                  <br></br>
                  Title: {experience.title}
                  <br></br>
                  From:  {moment(experience.from).format("MM/DD/YYYY")} - {experience.current === false ? ('Now') : (moment(experience.to).format("MM/DD/YYYY"))}
                  <br></br>
                  Description: {experience.description}
                  <br></br>
                  <hr></hr>
                </Typography>
              ))
            ) : (
              <span>No experience listed</span>
            )}
          </Typography>

          <Typography variant="body1">
            <strong>Education: </strong>
            <br></br>
            {profile.education && profile.education.length > 0 ? (
              profile.education.map((education) => (
                <Typography variant="body2" key={education}>
                  School: {education.school}
                <br></br>    
                  Degree: {education.degree}
                  <br></br>
                  From:  {moment(education.from).format("MM/DD/YYYY")} - {education.current === false ? ('Now') : (moment(education.to).format("MM/DD/YYYY"))}
                  <hr></hr>
                </Typography>
              ))
            ) : (
              <span>No education listed</span>
            )}
          </Typography>
        </Paper>
        <ProfileGithub githubUser={profile.githubusername} />
      </Container>
    </>
  );
};

export default Profile;
