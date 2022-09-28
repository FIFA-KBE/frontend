import React from "react";
import { Typography } from "@material-ui/core";
import PlayerCards from "../Components/PlayerCards";

function Players({ position, selectedPlayer, setSelectedPlayer }) {
  return (
    <>
      <Typography align={"center"} variant={"h3"} style={{ color: "#2196f3" }}>
        Players
      </Typography>

      <PlayerCards
        position={position}
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
      />
    </>
  );
}

export default Players;
