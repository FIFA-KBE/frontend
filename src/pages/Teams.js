import { useState, useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

import TeamCard from "../Components/TeamCard";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/teams").then((response) => {
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
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {teams.map((team, index) => (
              <Grid item xs={12} key={index} style={{ marginRight: "20%" }}>
                <TeamCard team={team} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Link to={"/team/new"}>
        <Button
          variant={"contained"}
          align={"center"}
          style={{ marginTop: 20, marginLeft: "70%" }}
        >
          Create your dream Team
        </Button>
      </Link>
    </div>
  );
}

export default Teams;
