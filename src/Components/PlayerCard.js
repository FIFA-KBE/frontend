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
  const isSelected = player && selectedPlayer && player === selectedPlayer;
  const imageHeight = inTeam ? 100 : 200;
  const styleForSelected = isSelected
    ? {
        backgroundColor: "#34cfeb",
        border: "2px solid #2196f3",
        borderRadius: "5px",
      }
    : { backgroundColor: "#" };
  const styleForInTeam = inTeam
    ? {
        width: "85px",
        backgroundColor: "#34cfeb",
      }
    : { backgroundColor: "#34cfeb" };
  return (
    <Fragment>
      <Card
        elevation={isSelected ? 24 : 1}
        raised={player && selectedPlayer && player === selectedPlayer}
        sx={{ maxWidth: 250 }}
        style={{
          ...styleForSelected,
          ...styleForInTeam,
        }}
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
