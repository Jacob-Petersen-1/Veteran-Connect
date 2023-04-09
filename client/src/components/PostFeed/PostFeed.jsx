import React, { useState, useEffect } from "react";

//Utils
import useAuth from "../../hooks/useAuth";
import axios from "axios";

//Components
import Post from "../Post/Post";
import { Box } from "@mui/material";
import CreatePost from "../CreatePost/CreatePost";
import Loader from "react-loading";

const PostFeed = () => {
  const [user, token] = useAuth();
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);


  const fetchPosts = async () => {
    try {
      let response = await axios.get("/api/posts/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false)
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    setTimeout(() => {
      fetchPosts();
    }, 500);
  }, [token]);

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


  return (
    <>
      <Box
        maxWidth="55rem"
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          px: 1,
          marginTop: "4rem",
          mx: "auto",
        }}
      >
        <CreatePost fetchPosts={fetchPosts} />
        {posts && posts.map((post) => <Post key={post._id} post={post} fetchPosts={fetchPosts} />)}
      </Box>
    </>
  );
};

export default PostFeed;
