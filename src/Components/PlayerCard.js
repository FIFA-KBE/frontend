import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";

function PlayerCard({
  playerName,
  position,
  rating,
  imageURL,
  player,
  inTeam,
  selectedPlayer,
}) {
  const imageHeight = inTeam ? 100 : 200;
  return (
    <Fragment>
      <Card
        elevation={
          player && selectedPlayer && player === selectedPlayer ? 24 : 1
        }
        sx={{ maxWidth: 250 }}
        style={
          inTeam
            ? { backgroundColor: "#2196f3", width: "85px" }
            : { backgroundColor: "#2196f3" }
        }
      >
        <CardMedia
          component="img"
          alt="football player"
          height={imageHeight}
          image={imageURL}
        />
        <CardContent
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ whiteSpace: "nowrap" }}
          >
            {playerName}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography size="small">{position}</Typography>
          <Typography size="small">{rating}</Typography>
        </CardActions>
      </Card>
    </Fragment>
  );
}

export default PlayerCard;
