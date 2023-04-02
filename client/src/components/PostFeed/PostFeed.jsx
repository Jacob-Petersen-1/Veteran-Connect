import React, { useState, useEffect } from "react";

//Utils
import useAuth from "../../hooks/useAuth";
import axios from "axios";

//Components
import Post from "../Post/Post";
import { Box} from "@mui/material";
import CreatePost from "../CreatePost/CreatePost";

const PostFeed = () => {
  const [user,token] = useAuth();
  const [posts, setPosts] = useState();

  // TODO UNCOMMENT USE EFFECT
  const fetchPosts = async () => {
    try {
      let response = await axios.get("/api/posts/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [token]);

  return (
    <>
      <Box
        maxWidth="55rem"
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          px: 3,
          marginTop: "6rem",
          mx: "auto",
        }}
      >
       <CreatePost fetchPosts={fetchPosts}/> 
        {posts && posts.map((post) => <Post key={post._id} post={post} />)}
      </Box>
    </>
  );
};

export default PostFeed;
