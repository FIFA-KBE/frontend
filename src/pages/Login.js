import React from "react";
import { Typography } from "@material-ui/core";
import { Grid, Input } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function Login({ setIsLoggedIn }) {
  let login = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Login</Typography>
        </Grid>
        <Grid item xs={12}>
          <Input placeholder="Username" />
        </Grid>
        <Grid item xs={12}>
          <Input placeholder="Password" />
        </Grid>
        <Grid item xs={12}>
          <Link to="/players">
            <Button variant="contained" onClick={login}>
              Login
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
