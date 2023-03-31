import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

//MUI Components Imports
import AppBarUser from "../../components/AppBar/AppBar";

import PostFeed from "../../components/PostFeed/PostFeed";
import CreatePost from "../../components/CreatePost/CreatePost";

const HomePage = () => {

  return (
    <>
      <AppBarUser />
      <PostFeed />
    </>
  );
};

export default HomePage;
