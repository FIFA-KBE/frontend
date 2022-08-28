import React from "react";
import { Grid } from "@mui/material";
import PlayerSelector from "./PlayerSelector";

function PlayersSelectorForPosition() {
  return (
    <div>
      <Grid container rowSpacing={12}>
        <Grid item xs={4} md={4} textAlign={"center"}>
          <PlayerSelector position={"Striker"} />
        </Grid>
        <Grid item xs={4} md={4} textAlign={"center"}>
          <PlayerSelector position={"Striker"} />
        </Grid>
        <Grid item xs={4} md={4} textAlign={"center"}>
          <PlayerSelector position={"Striker"} />
        </Grid>
        <Grid item xs={4} md={4} textAlign={"center"}>
          <PlayerSelector position={"Midfielder"} />
        </Grid>
        <Grid item xs={4} md={4} textAlign={"center"}>
          <PlayerSelector position={"Midfielder"} />
        </Grid>
        <Grid item xs={4} md={4} textAlign={"center"}>
          <PlayerSelector position={"Midfielder"} />
        </Grid>
        <Grid item xs={3} md={3} textAlign={"center"}>
          <PlayerSelector position={"Defender"} />
        </Grid>
        <Grid item xs={3} md={3} textAlign={"center"}>
          <PlayerSelector position={"Defender"} />
        </Grid>
        <Grid item xs={3} md={3} textAlign={"center"}>
          <PlayerSelector position={"Defender"} />
        </Grid>
        <Grid item xs={3} md={3} textAlign={"center"}>
          <PlayerSelector position={"Defender"} />
        </Grid>
        <Grid item xs={12} md={12} textAlign={"center"}>
          <PlayerSelector position={"Defender"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default PlayersSelectorForPosition;
