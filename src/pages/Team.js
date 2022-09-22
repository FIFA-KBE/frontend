import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import stadium from "../resources/stadium.png";
import PlayersSelectorForPosition from "../Components/PlayersSelectorForPosition";

function Team({ team }) {
  const location = useLocation();
  const teamName = location.state?.team.teamName;
  const teamFromState = location.state?.team;
  console.log(teamFromState);
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
          <PlayersSelectorForPosition team={teamFromState} />
        </div>
      </div>
    </div>
  );
}

export default Team;
