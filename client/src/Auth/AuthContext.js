import React from "react";
import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;


// Function to Destructure user object in JWT Payload
function setUserObject(user) {
  if (!user) {
    return null;
  }

    return {
      id: user.user.id,
      name: user.user.name,
      avatar: user.user.avatar,
    };

  }


// AuthProvider
export const AuthProvider = ({ children }) => {
  const userToken = JSON.parse(localStorage.getItem("token"));
  const decodedUser = userToken ? jwtDecode(userToken) : null
  const [token, setToken] = useState(userToken);
  const [user, setUser] = useState(setUserObject(decodedUser));
  const [isServerError, setIsServerError] = useState(false);
  const navigate = useNavigate();




  const registerUser = async (registerData) => {
    try {
      let finalData = {
        name: registerData.name,
        password: registerData.password,
        email: registerData.email,
      };
      let response = await axios.post(`/api/users/`, finalData);
      if (response.status === 200) {
        console.log("Successful registration! Log in to access token");
        setIsServerError(false);
        try {
          let loginData = {
            email: finalData.email,
            password: finalData.password
          }
          loginUser(loginData)
          navigate("/home");
          
        } catch (error) {
          console.log(error)
          
        }
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
        localStorage.setItem('token', JSON.stringify(response.data.token));
        setToken(JSON.parse(localStorage.getItem('token')));
        let loggedInUser = jwtDecode(response.data.token)
        setUser(setUserObject(loggedInUser))
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
    setIsServerError,
    isServerError,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
