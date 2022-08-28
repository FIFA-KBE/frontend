import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Players from "../pages/Players";

export default function PlayerSelector({ position }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        style={{ fontWeight: "bolder", fontSize: "30px" }}
      >
        +
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a {position} to the team</DialogTitle>
        <DialogContent>
          <Players position={position} />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add Player</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
