import { useState, useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

import TeamCard from "../Components/TeamCard";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6003/teams").then((response) => {
      setTeams(response.data);
    });
  }, []);

  console.log(teams);

  return (
    <div>
      <Typography align={"center"} variant={"h2"} style={{ color: "#2196f3" }}>
        Teams
      </Typography>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "40vh" }}
      >
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {teams.map((team, index) => (
              <Grid item xs={12} sm={12} md={12} key={index}>
                <TeamCard team={team} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Link to={"/team/new"}>
        <Button variant={"contained"} align={"center"}>
          Create Team
        </Button>
      </Link>
    </div>
  );
}

export default Teams;
