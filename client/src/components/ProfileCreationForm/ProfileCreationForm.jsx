import React, { useEffect, useContext } from "react";

//Utils Imports
import AuthContext from "../../Auth/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";


//MUI Imports
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Typewriter from "../TypeWriter/TypeWriter";
import { Avatar, IconButton } from "@mui/material";

const ProfileCreationForm = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate()
  const { isServerError, setIsServerError } = useContext(AuthContext);
  const defaultValues = {
    company: "",
    website: "website.com",
    location: "",
    status: "",
    skills: "Python,Java,ect",
    servicebranch: "",
    bio: "",
    githubusername: "",
    twitter: "twitter.com",
    facebook: "facebook.com",
    linkedin: "linkedin.com",
    instagram: "instagram.com",
  };



  const createProfile = async (formData) => {
    try {
      axios
        .post("/api/profile/", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          console.log("Profile Created");
          navigate(`/profile/${user.id}`)
          
        });
    } catch (error) {
      setIsServerError(true);
      console.error("Error Creating post:", error);
    }
  };

  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    createProfile
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        marginTop="6rem"
        style={{ minHeight: "100vh" }}
      >
        <Box
          padding="2rem"
          component="form"
          maxWidth="50rem"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <Typewriter text={"Create your Profile"} variant={"h5"} />
          <Link to={"https://en.gravatar.com/"} target="_blank">
          <IconButton>
            <Avatar  sx={{ width: 100, height: 100, my: 4 }} src={user.avatar}/>
            <Typography variant="h6" sx={{color:"white", p:"3rem",}}>{user.name}</Typography>
          </IconButton>
          </Link>
            <Typography sx={{color:"white"}} >Your avatar is based of your gravatar account. Click on the icon to create a free gravatar using your account email!</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Current Company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            fullWidth
            name="website"
            label="Porfolio Site"
            type="text"
            value={formData.website}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="location"
            label="Location by State"
            type="text"
            value={formData.location}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="status"
            label="Current Status Title"
            type="text"
            value={formData.status}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="skills"
            label="Languages/Tech Skills (comma separated)"
            type="text"
            value={formData.skills}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            fullWidth
            required
            name="servicebranch"
            label="Branch of Service"
            type="text"
            value={formData.servicebranch}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            fullWidth
            name="bio"
            label="Brief Bio"
            type="text"
            id="outlined-basic"
            value={formData.bio}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            fullWidth
            name="githubusername"
            label="Github Username"
            type="text"
            id="outlined-basic"
            value={formData.githubusername}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            fullWidth
            name="twitter"
            label="Twitter (if applicable)"
            type="text"
            id="outlined-basic"
            value={formData.twitter}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            fullWidth
            name="facebook"
            label="Facebook (if applicable)"
            type="text"
            id="outlined-basic"
            value={formData.facebook}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            fullWidth
            name="linkedin"
            label="Linkedin (if applicable)"
            type="text"
            id="outlined-basic"
            value={formData.linkedin}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            fullWidth
            name="instagram"
            label="Instagram (if applicable)"
            type="text"
            id="outlined-basic"
            value={formData.instagram}
            onChange={handleInputChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default ProfileCreationForm;
