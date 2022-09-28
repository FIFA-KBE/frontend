import React from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import stadium from "../resources/stadium.png";
import PlayersSelectorForPosition from "../Components/PlayersSelectorForPosition";
import Axios from "axios";

function Team({ team }) {
  const location = useLocation();
  const teamName = location.state?.team.teamName;
  const teamFromState = location.state?.team;
  console.log("team punket?", teamFromState);
  const seeingATeam = teamFromState === undefined ? false : true;
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [textDisabled, setTextDisabled] = React.useState(false);
  const [teamNameInput, setTeamNameInput] = React.useState(teamName);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function disableButton() {
    setButtonDisabled(true);
    await sleep(3000);
    setTextDisabled(true);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          align={"center"}
          variant={"h3"}
          style={{ color: "#2196f3" }}
        >
          {teamName
            ? "Viewing the " + teamName + " team"
            : "Creating a new team"}
        </Typography>
        <Box
          component="img"
          sx={{
            height: 720,
            width: 900,
            maxHeight: { xs: 1400, md: 1200 },
            maxWidth: { xs: 1400, md: 1200 },
          }}
          alt="Stadium"
          src={stadium}
          style={{ position: "absolute", marginTop: "26rem" }}
        />
        <div style={{ position: "absolute", marginTop: "50rem" }}>
          <PlayersSelectorForPosition
            team={teamFromState}
            buttonDisabled={!buttonDisabled}
          />
        </div>
        {!seeingATeam ? (
          <TextField
            id="filled-basic"
            label="Team Name"
            variant="filled"
            style={{
              position: "absolute",
              marginLeft: "45rem",
              marginTop: "1rem",
            }}
            onChange={(e) => {
              setTeamNameInput(e.target.value);
              console.log("teamNameInput", teamNameInput);
            }}
          />
        ) : null}
        {!seeingATeam ? (
          <Button
            variant="contained"
            color="primary"
            style={{
              position: "absolute",
              marginLeft: "80rem",
            }}
            disabled={buttonDisabled}
            onClick={() => {
              disableButton();
              Axios.post(
                `http://localhost:3003/newTeam/Messi/${teamNameInput}`
              );
            }}
          >
            Please enter team name here
          </Button>
        ) : null}

        {!seeingATeam ? (
          <Typography
            align={"center"}
            variant={"h3"}
            style={{
              position: "absolute",
              marginLeft: "80rem",
              marginTop: "20rem",
              color: "red",
            }}
          >
            {buttonDisabled
              ? textDisabled
                ? ""
                : "Team name has been entered!"
              : "Please enter team name so you can add Players to your team."}
          </Typography>
        ) : null}

        {!seeingATeam ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              Axios.post(`http://localhost:3003/saveData`);
              window.open("http://localhost:3000/teams", "_self");
            }}
            style={{
              position: "absolute",
              marginTop: "80rem",
              marginLeft: "80rem",
              fontSize: "2rem",
            }}
          >
            Create the Team
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default Team;
