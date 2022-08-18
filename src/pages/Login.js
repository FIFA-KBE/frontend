import React from "react";
import { Typography } from "@material-ui/core";

function Login({ setIsLoggedIn }) {
  let login = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      <Typography align="center" variant={"h4"} onClick={login}>
        Login
      </Typography>
      <Typography align={"center"}>This is the Login page</Typography>
    </div>
  );
}

export default Login;
