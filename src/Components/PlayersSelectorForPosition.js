import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Grid } from "@mui/material";
import PlayerSelector from "./PlayerSelector";
import PlayerCard from "./PlayerCard";

function PlayersSelectorForPosition({ team, buttonDisabled }) {
  const seeingATeam = team === undefined ? false : true;
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3003/players").then((response) => {
      setPlayers(response.data);
    });
  }, []);
  const playerOne = seeingATeam
    ? players.find((player) => player.name === team.playerOne)
    : null;
  const playerTwo = seeingATeam
    ? players.find((player) => player.name === team.playerTwo)
    : null;
  const playerThree = seeingATeam
    ? players.find((player) => player.name === team.playerThree)
    : null;
  const playerFour = seeingATeam
    ? players.find((player) => player.name === team.playerFour)
    : null;
  const playerFive = seeingATeam
    ? players.find((player) => player.name === team.playerFive)
    : null;
  const playerSix = seeingATeam
    ? players.find((player) => player.name === team.playerSix)
    : null;
  const playerSeven = seeingATeam
    ? players.find((player) => player.name === team.playerSeven)
    : null;
  const playerEight = seeingATeam
    ? players.find((player) => player.name === team.playerEight)
    : null;
  const playerNine = seeingATeam
    ? players.find((player) => player.name === team.playerNine)
    : null;
  const playerTen = seeingATeam
    ? players.find((player) => player.name === team.playerTen)
    : null;
  const playerEleven = seeingATeam
    ? players.find((player) => player.name === team.playerEleven)
    : null;
  return (
    <div>
      {seeingATeam ? (
        <Grid container spacing={1}>
          <Grid container item xs={4} md={4} justifyContent="end">
            {playerEleven ? (
              <PlayerCard
                playerName={playerEleven.name}
                imageURL={playerEleven.imageURL}
                inTeam={true}
              />
            ) : null}
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {playerTen ? (
              <PlayerCard
                playerName={playerTen.name}
                imageURL={playerTen.imageURL}
                inTeam={true}
              />
            ) : null}
          </Grid>
          <Grid item xs={4} md={4} textAlign={"center"}>
            {playerNine ? (
              <PlayerCard
                playerName={playerNine.name}
                imageURL={playerNine.imageURL}
                inTeam={true}
              />
            ) : null}
          </Grid>
          <Grid item xs={4} md={4} container justifyContent="end">
            {playerEight ? (
              <PlayerCard
                playerName={playerEight.name}
                imageURL={playerEight.imageURL}
                inTeam={true}
              />
            ) : null}
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {playerSeven ? (
              <PlayerCard
                playerName={playerSeven.name}
                imageURL={playerSeven.imageURL}
                inTeam={true}
              />
            ) : null}
          </Grid>
          <Grid item xs={4} md={4}>
            {playerSix ? (
              <PlayerCard
                playerName={playerSix.name}
                imageURL={playerSix.imageURL}
                inTeam={true}
              />
            ) : null}
          </Grid>
          <Grid item container xs={3} md={3} justifyContent="end">
            {playerFive ? (
              <PlayerCard
                playerName={playerFive.name}
                imageURL={playerFive.imageURL}
                inTeam={true}
              />
            ) : null}
          </Grid>
          <Grid
            item
            xs={3}
            md={3}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {playerFour ? (
              <PlayerCard
                playerName={playerFour.name}
                imageURL={playerFour.imageURL}
                inTeam={true}
              />
            ) : null}
          </Grid>
          <Grid
            item
            xs={3}
            md={3}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {playerThree ? (
              <PlayerCard
                playerName={playerThree.name}
                imageURL={playerThree.imageURL}
                inTeam={true}
              />
            ) : null}
          </Grid>
          <Grid item xs={3} md={3} textAlign={"center"}>
            {playerTwo ? (
              <PlayerCard
                playerName={playerTwo.name}
                imageURL={playerTwo.imageURL}
                inTeam={true}
              />
            ) : null}
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={12}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {playerOne ? (
              <PlayerCard
                playerName={playerOne.name}
                imageURL={playerOne.imageURL}
                inTeam={true}
              />
            ) : null}
          </Grid>
        </Grid>
      ) : (
        <Grid container rowSpacing={12}>
          <Grid item xs={4} md={4} textAlign={"center"}>
            <PlayerSelector
              position={"Striker"}
              buttonDisabled={buttonDisabled}
            />
          </Grid>
          <Grid item xs={4} md={4} textAlign={"center"}>
            <PlayerSelector
              position={"Striker"}
              buttonDisabled={buttonDisabled}
            />
          </Grid>
          <Grid item xs={4} md={4} textAlign={"center"}>
            <PlayerSelector
              position={"Striker"}
              buttonDisabled={buttonDisabled}
            />
          </Grid>
          <Grid item xs={4} md={4} textAlign={"center"}>
            <PlayerSelector
              position={"Midfielder"}
              buttonDisabled={buttonDisabled}
            />
          </Grid>
          <Grid item xs={4} md={4} textAlign={"center"}>
            <PlayerSelector
              position={"Midfielder"}
              buttonDisabled={buttonDisabled}
            />
          </Grid>
          <Grid item xs={4} md={4} textAlign={"center"}>
            <PlayerSelector
              position={"Midfielder"}
              buttonDisabled={buttonDisabled}
            />
          </Grid>
          <Grid item xs={3} md={3} textAlign={"center"}>
            <PlayerSelector
              position={"Defender"}
              buttonDisabled={buttonDisabled}
            />
          </Grid>
          <Grid item xs={3} md={3} textAlign={"center"}>
            <PlayerSelector
              position={"Defender"}
              buttonDisabled={buttonDisabled}
            />
          </Grid>
          <Grid item xs={3} md={3} textAlign={"center"}>
            <PlayerSelector
              position={"Defender"}
              buttonDisabled={buttonDisabled}
            />
          </Grid>
          <Grid item xs={3} md={3} textAlign={"center"}>
            <PlayerSelector
              position={"Defender"}
              buttonDisabled={buttonDisabled}
            />
          </Grid>
          <Grid item xs={12} md={12} textAlign={"center"}>
            <PlayerSelector
              position={"Keeper"}
              buttonDisabled={buttonDisabled}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default PlayersSelectorForPosition;
