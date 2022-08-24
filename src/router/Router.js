import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import Github from "../pages/Github";
import Players from "../pages/Players";

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
        <Route path="/teams" element={<Home />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
