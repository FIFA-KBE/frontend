import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../Keycloak";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import Github from "../pages/Github";
import Players from "../pages/Players";
import Teams from "../pages/Teams";
import Team from "../pages/Team";
import PrivateRoute from "../helpers/PrivateRouter";

function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <BrowserRouter>
        <NavBar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setSelectedCurrency={setSelectedCurrency}
        />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/logout" element={<Home />} />
          <Route path="/github" element={<Github />} />
          <Route
            path="/teams"
            element={
              <PrivateRoute>
                <Teams />
              </PrivateRoute>
            }
          />
          <Route path="/players" element={<Players />} />
          <Route
            path="/team/new"
            element={<Team team={false} selectedCurrency={selectedCurrency} />}
          />
          <Route
            path="/team/:teamName"
            element={<Team team={false} selectedCurrency={selectedCurrency} />}
          />
        </Routes>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
}
export default Router;
