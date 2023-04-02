import React, { useState, useEffect } from "react";

//Utils
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

//Mui Imports
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const PostModal = ({ post, isOpen, setIsOpen }) => {
  const [user, token] = useAuth();
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `/api/posts/comment/${post._id}`,
      {
        text: newComment,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setComments(response.data);
    setNewComment("");
  };

  return (
    <Modal open={isOpen}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: "80vw",
          maxHeight: "80vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f5f5f5",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
          },
        }}
      >
        <IconButton
          onClick={() => setIsOpen(false)}
          sx={{
            position: "absolute",
            top: "16px",
            right: "16px",
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Link to={`/profile/${post.user}`}>
          <Avatar alt="Profile Photo" src={post.avatar} />
        </Link>

        <Typography variant="h5">{post.name}</Typography>
        <Typography variant="body1">{post.text}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h5">Comments</Typography>
        <List sx={{ mb: 2 }}>
          {comments &&
            [...comments].reverse().map((comment) => (
              <ListItem key={comment._id}>
                <ListItemAvatar>
                  <Link to={`/profile/${comment.user}`}>
                    <Avatar src={comment.avatar} />
                  </Link>
                </ListItemAvatar>
                <ListItemText primary={comment.name} secondary={comment.text} />
              </ListItem>
            ))}
        </List>
        <form onSubmit={handleCommentSubmit}>
          <TextField
            label="Leave a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default PostModal;
