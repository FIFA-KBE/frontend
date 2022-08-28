import { Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Teams() {
  return (
    <div>
      <Typography align={"center"} variant={"h3"} style={{ color: "#2196f3" }}>
        Teams
      </Typography>
      <Link to={"/team/new"}>
        <Button variant={"contained"} align={"center"}>
          Create Team
        </Button>
      </Link>
    </div>
  );
}

export default Teams;
