import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

// Utils Imports
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import AuthContext from "../../Auth/AuthContext";

// MUI Imports
import Paper from "@mui/material/Paper";
import { Box, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CreatePost = ({ fetchPosts }) => {
  const [user, token] = useAuth();
  const { isServerError,setIsServerError } = useContext(AuthContext);
  const defaultValues = { text: "" };
  const sendPost = async (postData) => {
    try {
      axios
        .post("api/posts/", postData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          console.log("Post Created");
          fetchPosts();
          reset()
          setIsServerError(false)
        });
    } catch (error) {
      setIsServerError(true)
      console.error("Error Creating post:", error);
    }
  };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    sendPost
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <>
      <Paper
        sx={{
          my: 1,
          mx: "auto",
          p: 2,
        }}
      >
        <IconButton>
          <Avatar alt="Profile Photo" src={user.avatar} />
        </IconButton>
        <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-multiline-static"
          multiline
          label="Whats on your mind?"
          type="text"
          name="text"
          rows={3}
          value={formData.text}
          variant="outlined"
          onChange={handleInputChange}
        />

        <Button type="submit" variant="contained">
          SEND
        </Button>

        </form>
      </Paper>
    </>
  );
};

export default CreatePost;
