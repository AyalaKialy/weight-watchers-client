import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import MyAppBar from "../components/AppBar";
import '../styles/diary.style.css';

export default function Diary() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return(
        <div id="container">
            <MyAppBar/>
            <div className="button" >
                <Button variant="contained" onClick={handleClickOpen}>Add a meal</Button>
            </div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>My Meals Today</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Summarize your meals on this day<br/>
          Please include foods with a space between them
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="currentDate"
            label="current date"
            type="Date"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      </div>
    )
}