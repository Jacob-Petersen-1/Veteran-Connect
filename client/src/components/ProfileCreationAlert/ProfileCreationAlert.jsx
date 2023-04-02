import * as React from 'react';


//Util Imports
import { useNavigate } from 'react-router-dom';

//Mui Imports
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const ProfileCreationAlert = ({isOwner,open,setOpen}) => {
    const navigate = useNavigate()
    
      const handleClose = () => {
        setOpen(false);
        navigate("/home")

      };
    
    return ( 
        <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Profile Not Found"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
        {isOwner? "Looks like you haven't created a profile yet. Would you like to?" : "This user does not have a profile"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back To Feed</Button>
          {isOwner ? <Button onClick={handleClose}>Create a Profile</Button> : null}
        </DialogActions>
      </Dialog>
        </>

     );

}
 
export default ProfileCreationAlert;