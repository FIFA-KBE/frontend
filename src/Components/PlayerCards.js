import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import PlayerCard from "./PlayerCard";
import Axios from "axios";

function PlayerCards({ position, selectedPlayer, setSelectedPlayer }) {
  const [players, setPlayers] = React.useState([]);
  const playersToBeShown = position
    ? players.reduce((playersList, player) => {
        if (player.position !== position) {
          return playersList;
        }
        playersList.push(player);
        return playersList;
      }, [])
    : players;

  useEffect(() => {
    Axios.get("http://localhost:3003/players").then((response) => {
      setPlayers(response.data);
    });
  }, []);
  return (
    <Grid
      container
      spacing={{ xs: 1, md: 3 }}
      columns={{ xs: 3, sm: 6, md: 12 }}
    >
      {playersToBeShown.map((player, index) => (
        <Grid
          item
          xs={1}
          sm={3}
          md={3}
          key={index}
          align="center"
          onClick={() => {
            setSelectedPlayer(player);
          }}
        >
          <PlayerCard
            playerName={player.name}
            position={player.position}
            rating={player.rating}
            imageURL={player.imageURL}
            selectedPlayer={selectedPlayer}
            player={player}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default PlayerCards;
