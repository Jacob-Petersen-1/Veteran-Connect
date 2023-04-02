import React, { useState} from 'react';



//utils
import * as moment from "moment";
import { useNavigate,useHref } from "react-router-dom";
import axios from "axios"
import useAuth from "../../hooks/useAuth"

//Component Mui Imports
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import MessageIcon from "@mui/icons-material/Message";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ShareIcon from "@mui/icons-material/Share";

const Post = ({ post }) => {
  const [user,token] = useAuth()
  const navigate = useNavigate();
  const profileUrl = useHref(`/profile/${post.user}`)
 const [upVoteCounter, setUpVoteCounter] = useState(post.likes.length)

  const handleProfileClick = () => {
    navigate(profileUrl);
  };

  const handleUpVote = async () => {
    try {
      await axios.put(`/api/posts/like/${post._id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      setUpVoteCounter(upVoteCounter+1)
    } catch (error) {
      console.log(error.msg)
      
    }
  }

  const handleDownVote = async () =>{
    try {
      await axios.put(`/api/posts/unlike/${post._id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      setUpVoteCounter(upVoteCounter-1)
    } catch (error) {
      console.log(error)
      
    }
  }



  return (
    <>
      <Paper
        sx={{
          my: 1,
          mx: "auto",
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <IconButton onClick={handleProfileClick}>
              <Avatar alt="Profile Photo" src={post.avatar} />
            </IconButton>
          </Grid>
          <Grid item sx={{ p: 2 }}>
            <Typography variant="h5">{post.name}</Typography>
            <Grid item>
              <Typography>{post.text}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Grid item>
            <IconButton onClick={handleUpVote}>
              <ArrowCircleUpIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography sx={{ display: 'inline-flex', alignItems: 'center' }}>{upVoteCounter}</Typography>
            <IconButton onClick={handleDownVote}>
              <ArrowCircleDownIcon sx={{ color: "white" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <MessageIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography sx={{ display: 'inline-flex', alignItems: 'center' }}>{post.comments.length}</Typography>
          </Grid>
          <Grid item>
            <Typography>{moment(post.date).format("MM/DD/YYYY")}</Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <ShareIcon sx={{ color: "white" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Post;
