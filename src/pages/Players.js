import React from "react";
import { Typography } from "@material-ui/core";
import fut_22_players from "../resources/fut_22_players.json";
import { Grid } from "@mui/material";
import PlayerCard from "../Components/PlayerCard";

function Players(props) {
  console.log(fut_22_players);

  return (
    <>
      <Typography align={"center"} variant={"h3"} style={{ color: "#2196f3" }}>
        Players
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {fut_22_players.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} align="center">
            <PlayerCard
              playerName={item.player_name}
              position={item.position}
              rating={item.overall}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Players;
