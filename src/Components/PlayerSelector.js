import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Axios from "axios";
import { useState } from "react";
import Players from "../pages/Players";

export default function PlayerSelector({
  position,
  backendPosition,
  buttonDisabled,
  teamName,
  setTeamCount,
  setAddedPlayerOne,
  setAddedPlayerTwo,
  setAddedPlayerThree,
  setAddedPlayerFour,
  setAddedPlayerFive,
  setAddedPlayerSix,
  setAddedPlayerSeven,
  setAddedPlayerEight,
  setAddedPlayerNine,
  setAddedPlayerTen,
  setAddedPlayerEleven,
  setSelectedPlayerOne,
  setSelectedPlayerTwo,
  setSelectedPlayerThree,
  setSelectedPlayerFour,
  setSelectedPlayerFive,
  setSelectedPlayerSix,
  setSelectedPlayerSeven,
  setSelectedPlayerEight,
  setSelectedPlayerNine,
  setSelectedPlayerTen,
  setSelectedPlayerEleven,
  setTotalValue,
}) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const savePlayer = () => {
    Axios.put(
      `http://localhost:3003/teams/${teamName}/${backendPosition}/${selectedPlayer.name}`
    );
    setTeamCount((prev) => prev + 1);
    setOpen(false);
    setTotalValue((prev) => prev + selectedPlayer.cost);
    switch (backendPosition) {
      case "keeper":
        setAddedPlayerOne(true);
        setSelectedPlayerOne(selectedPlayer);
        break;
      case "defender1":
        setAddedPlayerTwo(true);
        setSelectedPlayerTwo(selectedPlayer);
        break;
      case "defender2":
        setAddedPlayerThree(true);
        setSelectedPlayerThree(selectedPlayer);
        break;
      case "defender3":
        setAddedPlayerFour(true);
        setSelectedPlayerFour(selectedPlayer);
        break;
      case "defender4":
        setAddedPlayerFive(true);
        setSelectedPlayerFive(selectedPlayer);
        break;
      case "midfielder1":
        setAddedPlayerSix(true);
        setSelectedPlayerSix(selectedPlayer);
        break;
      case "midfielder2":
        setAddedPlayerSeven(true);
        setSelectedPlayerSeven(selectedPlayer);
        break;
      case "midfielder3":
        setAddedPlayerEight(true);
        setSelectedPlayerEight(selectedPlayer);
        break;
      case "striker1":
        setAddedPlayerNine(true);
        setSelectedPlayerNine(selectedPlayer);
        break;
      case "striker2":
        setAddedPlayerTen(true);
        setSelectedPlayerTen(selectedPlayer);
        break;
      case "striker3":
        setAddedPlayerEleven(true);
        setSelectedPlayerEleven(selectedPlayer);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        style={{ fontWeight: "bolder", fontSize: "30px" }}
        disabled={buttonDisabled}
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
          <Button onClick={savePlayer}>Add Player</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
