import React from "react";

//utils
import * as moment from "moment";
import { useNavigate,useHref } from "react-router-dom";

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
  const navigate = useNavigate();
  const profileUrl = useHref(`/profile/${post.user}`)

  const handleProfileClick = () => {
    navigate(profileUrl);
  };

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
            <IconButton>
              <ArrowCircleUpIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <ArrowCircleDownIcon sx={{ color: "white" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <MessageIcon sx={{ color: "white" }} />
            </IconButton>
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
