import { Typography } from "@material-ui/core";

function Home() {
  return (
    <div>
      <Typography
        align={"right"}
        style={{
          position: "absolute",
          top: "70px",
          right: "0px",
          color: "#1769aa",
          fontWeight: "bold",
          float: "right",
        }}
      >
        Ever dreamed of creating the best football team ever? <br />
        With FIFA KBE, you can do that easily, just create a <br />
        team in the teams page and play against other teams. <br />
        You can take a look at all the players available in the players page.
      </Typography>
      <Typography
        align={"left"}
        style={{
          marginLeft: "10px",
          position: "absolute",
          bottom: "5px",
          color: "#2196f3",
        }}
      >
        This Project is made as part of an assignment for the <br />
        course KBE at the University of Applied Sciences for <br />
        Engineering and Technology of Berlin (HTW). <br />
        By Neji Ghazouani, Furkan Bülbül and Mahmoud Barakat.
      </Typography>
    </div>
  );
}

export default Home;
