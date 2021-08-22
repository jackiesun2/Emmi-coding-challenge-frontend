import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = useState("");
  const [ticket, setTicket] = useState({
    date: "",
    title: "",
    description: "",
    open: true,
  });

  const newDate = () => {
    const dateObject = new Date();
    const [year, month, day] = [
      dateObject.getUTCFullYear(),
      dateObject.getUTCMonth() + 1,
      dateObject.getUTCDate(),
    ];
    return `${year}-${month}-${day}`;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);
    console.log(newDate());
    console.log(e);
    await fetch("http://localhost:3000/ticket", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Ticket
      </Button>
      <form>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Ticket</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
