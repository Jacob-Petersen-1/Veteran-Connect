import React, { useState } from "react";

// MUI Imports
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PostDeleteAlert = ({ open,handleDeleteClick,setUserDelete, setOpen}) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setUserDelete(false);
    setOpen(false);
  };

  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete your post?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete your post? Once deleted, it cannot be recovered.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Go Back</Button>
          <Button onClick={handleDeleteClick} autoFocus>
            Delete Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PostDeleteAlert;
