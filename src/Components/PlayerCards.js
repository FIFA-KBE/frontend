import React from "react";
import fut_22_players from "../resources/fut_22_players.json";
import { Grid } from "@mui/material";
import PlayerCard from "./PlayerCard";

function PlayerCards({ position }) {
  console.log(position);
  const playersToBeShown = position
    ? fut_22_players.reduce((playersList, player) => {
        if (player.position !== position) {
          return playersList;
        }
        playersList.push(player);
        return playersList;
      }, [])
    : fut_22_players;

  console.log(playersToBeShown);

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 3 }}
      columns={{ xs: 3, sm: 6, md: 12 }}
    >
      {playersToBeShown.map((item, index) => (
        <Grid item xs={1} sm={3} md={3} key={index} align="center">
          <PlayerCard
            playerName={item.player_name}
            position={item.position}
            rating={item.overall}
            imageURL={
              "https://futhead.cursecdn.com/static/img/22/players/20801.png"
            }
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default PlayerCards;
