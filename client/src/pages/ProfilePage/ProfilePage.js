import React, { useState, useEffect } from "react";

//Component Imports
import AppBarCustom from "../../components/AppBar/AppBar";
import Profile from "../../components/Profile/Profile";
//MUI Imports

const ProfilePage = () => {
  return (
    <>
      <AppBarCustom />
      <Profile />
    </>
  );
};

export default ProfilePage;
