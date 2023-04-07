import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

// Utils Imports
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import AuthContext from "../../Auth/AuthContext";

// MUI Imports

import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import Fab from "@mui/material/Fab";
import CreatePostMobile from "../CreatePostMobile/CreatePostMobile";


const CreatePost = ({ fetchPosts }) => {
  const [user, token] = useAuth();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  const { isServerError, setIsServerError } = useContext(AuthContext);
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
          reset();
          setOpen(false)
          setIsServerError(false);
        });
    } catch (error) {
      setIsServerError(true);
      console.error("Error Creating post:", error);
    }
  };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    sendPost
  );


  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <>
      {isMobile ? (
        <>
          <CreatePostMobile open={open}  handleClose={handleClose} sendPost={sendPost}/>

          <AppBar
            position="fixed"
            color="grey"
            sx={{
              top: "auto",
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Toolbar>
              <Fab
                color="primary"
                aria-label="add"
                sx={{
                  bottom: 20,
                }}
              >
                <AddIcon onClick={() => setOpen(!open)} />
              </Fab>
            </Toolbar>
          </AppBar>
        </>
      ) : (
        <>
          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
              my: 1,
              mx: "auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <Avatar alt="Profile Photo" src={user.avatar} />
              </IconButton>
              <Typography sx={{ p: 1 }}>{user.name}</Typography>
            </Box>

            <TextField
              sx={{
                width: "100%",
              }}
              id="outlined-multiline-static"
              multiline
              label="What is on your mind?"
              type="text"
              name="text"
              rows={3}
              value={formData.text}
              variant="outlined"
              onChange={handleInputChange}
            />

            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Paper>
        </>
      )}
    </>
  );
};

export default CreatePost;
