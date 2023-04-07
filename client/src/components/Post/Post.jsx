import React, { useState} from "react";

//utils
import * as moment from "moment";
import { useNavigate, useHref } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

//Component Mui Imports
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ForumIcon from "@mui/icons-material/Forum";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PostModal from "../PostCommentModal/PostCommentModal";
import DeleteIcon from "@mui/icons-material/Delete";
import PostDeleteAlert from "../PostDeleteAlert/PostDeleteAlert";

const Post = ({ post, fetchPosts }) => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const profileUrl = useHref(`/profile/${post.user}`);
  const [upVoteCounter, setUpVoteCounter] = useState(post.likes.length);
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [userDelete, setUserDelete] = useState(false);


  const handleDeleteAlert = () => {
    setShowAlert(!showAlert);
  }

  const handleDeleteClick = async () => {
    setUserDelete(false)
    try {
      await axios.delete(`/api/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleIconClick = () => {
    setUserDelete(!userDelete);
  };

  const handleProfileClick = () => {
    navigate(profileUrl);
  };

  const handleUpVote = async () => {
    try {
      await axios.put(
        `/api/posts/like/${post._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUpVoteCounter(upVoteCounter + 1);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const handleDownVote = async () => {
    try {
      await axios.put(
        `/api/posts/unlike/${post._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUpVoteCounter(upVoteCounter - 1);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Paper
        sx={{
          my: 1,
          mx: "auto",
          p: 1,
        }}
      >
        <Grid container direction="column" spacing={2}>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
          >
            <IconButton sx={{ color: "white" }} onClick={handleProfileClick}>
              <Avatar alt="Profile Photo" src={post.avatar} />
              <Typography variant="h5" sx={{ fontSize: "1rem", ml: "1rem" }}>
                {post.name}
              </Typography>
            </IconButton>
            <Grid item sx={{ flexGrow: 1, textAlign: "end" }}>
              {user.id === post.user && (
                <>
                  {userDelete ? (
                    <>
                      <IconButton onClick={handleDeleteAlert}>
                        <DeleteIcon sx={{ color: "red" }} />
                      </IconButton>
                      <PostDeleteAlert open={showAlert} setUserDelete={setUserDelete} setOpen={setShowAlert} handleDeleteClick={handleDeleteClick} />

                    </>
                  ) : (
                    <>
                      <IconButton onClick={handleIconClick}>
                        <MoreVertIcon sx={{ color: "white" }} />
                      </IconButton>
                    </>
                  )}
                </>
              )}
            </Grid>
          </Grid>

          <Grid padding={3} marginLeft={3} item>
            <Typography sx={{ fontSize: ".8rem" }}>{post.text}</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <IconButton onClick={handleUpVote}>
              <ArrowCircleUpIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography sx={{ display: "inline-flex", alignItems: "center" }}>
              {upVoteCounter}
            </Typography>
            <IconButton onClick={handleDownVote}>
              <ArrowCircleDownIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton onClick={() => setIsOpen(true)}>
              <ForumIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography sx={{ display: "inline-flex", alignItems: "center" }}>
              {post.comments.length}
            </Typography>
          </Grid>

          <Grid sx={{ pr: 1 }} item>
            <Typography>{moment(post.date).format("MM/DD/YYYY")}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <PostModal post={post} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Post;
