import { Typography } from "@material-ui/core";

function Home() {
  return (
    <div>
      <Typography align={"left"} style={{ marginLeft: "60%" }}>
        <p>
          Ever dreamed of creating the best football team ever? <br />
          With FIFA KBE, you can do that easily, just create a team in the teams
          page and play against other teams. <br />
          You can take a look at all the players available in the players page.
        </p>
      </Typography>
      <Typography
        align={"left"}
        style={{ marginLeft: "10px", position: "absolute", bottom: "5px" }}
      >
        <p>
          This Project is made as a part of an assignment for the <br />
          course KBE at the University of Applied Sciences for <br />
          Engineering and Technology of Berlin (HTW). <br />
          By Neji Ghazouani, Furkan Bülbül and Mahmoud Barakat.
        </p>
      </Typography>
    </div>
  );
}

export default Home;
