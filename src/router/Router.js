import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import Github from "../pages/Github";
import Players from "../pages/Players";
import Teams from "../pages/Teams";
import Team from "../pages/Team";

function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/logout" element={<Home />} />
        <Route path="/github" element={<Github />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="/team/new" element={<Team team={false} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
