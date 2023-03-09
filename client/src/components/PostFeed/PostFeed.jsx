import React, { useState, useEffect } from "react";

//Utils
import useAuth from "../../hooks/useAuth";
import axios from "axios";

//Components
import Post from "../Post/Post";
import { Box, Grid } from "@mui/material";

const PostFeed = () => {
  const [user, token] = useAuth();
  const [posts, setPosts] = useState([
    {
      _id: "63fc2bd5f2e9c34b72373241",
      user: "63f29047c42d5eef1c882b56",
      text: "Hello World",
      name: "Jake",
      avatar:
        "//www.gravatar.com/avatar/99fdb26cd31606300b8e00113efec81d?s=200&r=pg&d=mm",
      likes: [
        {
          user: "63fc2be9f2e9c34b72373245",
          _id: "63fc308927f2e42e199b3aad",
        },
      ],
      comments: [],
      date: "2023-02-27T04:04:37.512Z",
      __v: 7,
    },
    {
      _id: "63fc2bd5f2e9c34b72373241",
      user: "63f29047c42d5eef1c882b56",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Jake",
      avatar:
        "//www.gravatar.com/avatar/99fdb26cd31606300b8e00113efec81d?s=200&r=pg&d=mm",
      likes: [
        {
          user: "63fc2be9f2e9c34b72373245",
          _id: "63fc308927f2e42e199b3aad",
        },
      ],
      comments: [],
      date: "2023-02-27T04:04:37.512Z",
      __v: 7,
    },
    {
      _id: "63fc2bd5f2e9c34b72373241",
      user: "63f29047c42d5eef1c882b56",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Jake",
      avatar:
        "//www.gravatar.com/avatar/99fdb26cd31606300b8e00113efec81d?s=200&r=pg&d=mm",
      likes: [
        {
          user: "63fc2be9f2e9c34b72373245",
          _id: "63fc308927f2e42e199b3aad",
        },
      ],
      comments: [],
      date: "2023-02-27T04:04:37.512Z",
      __v: 7,
    },
  ]);

  const fetchPosts = async () => {
    try {
      let response = await axios.get("/api/posts/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // TODO UNCOMMENT USE EFFECT
  //   useEffect(() => {
  //     fetchPosts();
  //   }, [token]);

  return (
    <>
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3, marginTop: "6rem" }}>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </Box>
    </>
  );
};

export default PostFeed;
