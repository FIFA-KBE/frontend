import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";

function PlayerCard({ playerName, position, rating, imageURL }) {
  return (
    <Fragment>
      <Card sx={{ maxWidth: 250 }} style={{ backgroundColor: "#2196f3" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="210"
          image={imageURL}
        />
        <CardContent
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary">
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
