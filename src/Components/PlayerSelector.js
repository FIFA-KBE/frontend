import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import Players from "../pages/Players";

export default function PlayerSelector({ position }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  useEffect(() => {
    console.log("this is the selected player", selectedPlayer);
  }, [selectedPlayer]);
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
          <Players
            position={position}
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add Player</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
