import React from "react";
import Home from "./Home";

function Github() {
  React.useEffect(() => {
    window.open("https://github.com/FIFA-KBE", "_blank");
  }, []);
  return <Home />;
}

export default Github;
