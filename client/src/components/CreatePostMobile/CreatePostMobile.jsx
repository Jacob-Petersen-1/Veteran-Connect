import React from "react";

//Utils

import useCustomForm from "../../hooks/useCustomForm";


// Material UI
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const CreatePostMobile = ({open,handleClose,sendPost}) => {

 
    const defaultValues = { text: "" };
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        defaultValues,
        () => sendPost(formData)
      );




  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-post-modal"
        aria-describedby="add-post-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            p: 4,
            maxWidth: "95%",
            width: 400,
            
          }}
        >
          <Typography variant="h5" gutterBottom>
            Create Post
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Say Something"
              variant="outlined"
              name="text"
              fullWidth
              required
              value={formData.text}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
              rows={3}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon/>}>
              Send
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default CreatePostMobile;
