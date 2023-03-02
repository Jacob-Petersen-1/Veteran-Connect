import React from "react";
import { createContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;


// Function to Grab the information from the user after successfull login. 
async function getUserObject(token) {
  if (!token) {
    return null;
  }
  try {
    console.log("Token in set user", token);
    let response = await axios.get("/api/auth/", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return {
      id: response.data._id,
      name: response.data.name,
      email: response.data.email,
      avatar: response.data.avatar,
      date: response.data.date,
    };
  } catch (error) {
    console.error("Error Setting User Object", error.message);
    return null;
  }
}

// AuthProvider
export const AuthProvider = ({ children }) => {
  const userToken = localStorage.getItem("token");
  let decodedUser = null;
  try {
    decodedUser = userToken ? jwtDecode(userToken) : null;
  } catch (error) {
    console.error("Error decoding user token:", error);
  }

  const [token, setToken] = useState(userToken);
  const [user, setUser] = useState();
  const [isServerError, setIsServerError] = useState(false);
  const navigate = useNavigate();

// After token is grabbed from first request, run a useEffect to grab user information. 
  useEffect(() => {
    async function fetchUser () {
      const user = await getUserObject(token);
      setUser(user)
    }
    if(token){
      fetchUser()
    }
  },[token])

//TODO Finish Testing
  const registerUser = async (registerData) => {
    try {
      let finalData = {
        name: registerData.name,
        password: registerData.password,
        email: registerData.email,
      };
      let response = await axios.post(`/api/users/`, finalData);
      if (response.status === 201) {
        console.log("Successful registration! Log in to access token");
        setIsServerError(false);
        navigate("/home");
      } else {
        navigate("/register");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  //Login User
  const loginUser = async (loginData) => {
    try {
      let response = await axios.post(`/api/auth/`, loginData);
      if (response.status === 200) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setToken(JSON.parse(localStorage.getItem("token")));
        setIsServerError(false);
        navigate("/home");
      } else {
        navigate("/register");
      }
    } catch (error) {
      console.log(error.response.data);
      setIsServerError(true);
      console.log("Error in login user", loginData);
      navigate("/register");
    }
  };

  // Logout User
  const logoutUser = () => {
    if (user) {
      localStorage.removeItem("token");
      setUser(null);
      setToken(null);
      navigate("/");
    }
  };

  const contextData = {
    user,
    token,
    loginUser,
    logoutUser,
    registerUser,
    isServerError,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
