import { Alert } from "@mui/material";

function Home() {
  return (
    <div>
      <Alert
        align={"right"}
        style={{
          position: "absolute",
          top: "70px",
          right: "0px",
          color: "#1769aa",
          float: "right",
          fontSize: "30px",
        }}
        icon={false}
        severity={"info"}
      >
        Ever dreamed of creating the best football team ever? <br />
        With FIFA KBE, you can do that easily, just create a <br />
        team in the teams page and play against other teams. <br />
        You can take a look at all the players available in the players page.
      </Alert>

      <Alert
        align={"left"}
        style={{
          marginLeft: "10px",
          position: "absolute",
          bottom: "5px",
          color: "#2196f3",
          fontSize: "30px",
        }}
        icon={false}
        severity={"info"}
      >
        This Project is made as part of an assignment for the <br />
        course KBE at the University of Applied Sciences for <br />
        Engineering and Technology of Berlin (HTW). <br />
        By Neji Ghazouani, Furkan Bülbül and Mahmoud Barakat.
      </Alert>
    </div>
  );
}

export default Home;
