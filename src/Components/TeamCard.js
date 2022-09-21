import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function TeamCard({ team }) {
  return (
    <Grid
      container
      spacing={{ xs: 1, md: 3 }}
      columns={{ xs: 3, sm: 6, md: 12 }}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 800 }} style={{ backgroundColor: "#2196f3" }}>
          <CardContent
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" color="text.secondary">
              {team.teamName}
            </Typography>
          </CardContent>
          <CardActions
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography size="small">{team.playerOne}</Typography>
            <Typography size="small">{team.playerTwo}</Typography>
            <Typography size="small">{team.playerThree}</Typography>
            <Typography size="small">{team.playerFour}</Typography>
            <Typography size="small">{team.playerFive}</Typography>
            <Typography size="small">{team.playerSix}</Typography>
            <Typography size="small">{team.playerSeven}</Typography>
            <Typography size="small">{team.playerEight}</Typography>
            <Typography size="small">{team.playerNine}</Typography>
            <Typography size="small">{team.playerTen}</Typography>
            <Typography size="small">{team.playerEleven}</Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={1}>
        <Link
          to={{
            pathname: `/team/${team.teamName}`,
            state: { team },
          }}
        >
          <Button variant={"contained"} align={"center"}>
            View Team
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
export default TeamCard;
