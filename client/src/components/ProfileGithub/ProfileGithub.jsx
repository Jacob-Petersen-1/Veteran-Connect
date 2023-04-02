import React, { useState, useEffect } from "react";

//utils
import axios from "axios";

//Mui Imports
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
import Loader from "react-loading";

const ProfileGithub = ({ githubUser }) => {
  const [githubRepos, setGithubRepos] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getGithubRepos = async () => {
    try {
      let response = await axios.get(`/api/profile/github/${githubUser}`);
      setGithubRepos(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChipClick = (link) => {
    window.open(link,"_blank")
  }

  useEffect(() => {
    getGithubRepos()
  }, []);

  return (
    <Paper
      sx={{
        padding: 5,
        textAlign: "left",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 1,
      }}
    >
      <Typography variant="h6">Github Repositories</Typography>
      {isLoading ? (
        <Loader type="bars" color="#ffffff" />
      ) : githubRepos && githubRepos.length > 0 ? (
        githubRepos.map((repo) => (
            <Chip label={repo.name} key={repo.id} onClick={() => handleChipClick(repo.html_url)}/>
        ))
      ) : (
        <span>No Github Repositories Connected</span>
      )}
    </Paper>
  );
};

export default ProfileGithub;
