import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import PlayerCard from "./PlayerCard";

function TeamCard({ team, currencyFromState }) {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3003/players").then((response) => {
      setPlayers(response.data);
    });
  }, []);
  const playerOne = players.find((player) => player.name === team.playerOne);
  const playerTwo = players.find((player) => player.name === team.playerTwo);
  const playerThree = players.find(
    (player) => player.name === team.playerThree
  );
  const playerFour = players.find((player) => player.name === team.playerFour);
  const playerFive = players.find((player) => player.name === team.playerFive);
  const playerSix = players.find((player) => player.name === team.playerSix);
  const playerSeven = players.find(
    (player) => player.name === team.playerSeven
  );
  const playerEight = players.find(
    (player) => player.name === team.playerEight
  );
  const playerNine = players.find((player) => player.name === team.playerNine);
  const playerTen = players.find((player) => player.name === team.playerTen);
  const playerEleven = players.find(
    (player) => player.name === team.playerEleven
  );
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={6}>
        <Card
          sx={{ maxWidth: 8000 }}
          style={{ backgroundColor: "#2196f3", width: "fit-content" }}
        >
          <CardContent
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item xs={10}>
              <Typography
                variant="h5"
                component="div"
                style={{ color: "white" }}
              >
                {team.teamName}
              </Typography>
            </Grid>
            <Grid container xs={2} style={{ justifyContent: "end" }}>
              <Link
                to={`/team/${team.teamName}`}
                state={{ team: team, currencyFromState: currencyFromState }}
                style={{ textDecoration: "none" }}
              >
                <Button variant={"contained"} align={"center"}>
                  View Team
                </Button>
              </Link>
            </Grid>
          </CardContent>
          <CardActions
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            {playerOne ? (
              <Typography size="small">
                <PlayerCard
                  playerName={playerOne.name}
                  imageURL={playerOne.imageURL}
                  inTeam={true}
                />
              </Typography>
            ) : null}
            {playerTwo ? (
              <Typography size="small">
                <PlayerCard
                  playerName={playerTwo.name}
                  imageURL={playerTwo.imageURL}
                  inTeam={true}
                />
              </Typography>
            ) : null}
            {playerThree ? (
              <Typography size="small">
                <PlayerCard
                  playerName={playerThree.name}
                  imageURL={playerThree.imageURL}
                  inTeam={true}
                />
              </Typography>
            ) : null}
            {playerFour ? (
              <Typography size="small">
                <PlayerCard
                  playerName={playerFour.name}
                  imageURL={playerFour.imageURL}
                  inTeam={true}
                />
              </Typography>
            ) : null}
            {playerFive ? (
              <Typography size="small">
                <PlayerCard
                  playerName={playerFive.name}
                  imageURL={playerFive.imageURL}
                  inTeam={true}
                />
              </Typography>
            ) : null}
            {playerSix ? (
              <Typography size="small">
                <PlayerCard
                  playerName={playerSix.name}
                  imageURL={playerSix.imageURL}
                  inTeam={true}
                />
              </Typography>
            ) : null}
            {playerSeven ? (
              <Typography size="small">
                <PlayerCard
                  playerName={playerSeven.name}
                  imageURL={playerSeven.imageURL}
                  inTeam={true}
                />
              </Typography>
            ) : null}
            {playerEight ? (
              <Typography size="small">
                <PlayerCard
                  playerName={playerEight.name}
                  imageURL={playerEight.imageURL}
                  inTeam={true}
                />
              </Typography>
            ) : null}
            {playerNine ? (
              <Typography size="small">
                <PlayerCard
                  playerName={playerNine.name}
                  imageURL={playerNine.imageURL}
                  inTeam={true}
                />
              </Typography>
            ) : null}
            {playerTen ? (
              <Typography size="small">
                <PlayerCard
                  playerName={playerTen.name}
                  imageURL={playerTen.imageURL}
                  inTeam={true}
                />
              </Typography>
            ) : null}
            {playerEleven ? (
              <Typography size="small">
                <PlayerCard
                  playerName={playerEleven.name}
                  imageURL={playerEleven.imageURL}
                  inTeam={true}
                />
              </Typography>
            ) : null}
          </CardActions>
          <Grid
            container
            xs={2}
            style={{ marginLeft: "56rem", marginBottom: "1rem" }}
          >
            <Button
              variant={"contained"}
              align={"center"}
              style={{ backgroundColor: "red" }}
              onClick={() => {
                Axios.delete(`http://localhost:3003/teams/${team.id}`);
                window.location.reload();
              }}
            >
              Delete Team
            </Button>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TeamCard;
