import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useKeycloak } from "@react-keycloak/web";

const drawerWidth = 240;

export default function NavBar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  let setSelectedCurrency = props.setSelectedCurrency;

  const { keycloak, initialized } = useKeycloak();
  console.log("keycloak", keycloak);
  const navItems = keycloak.authenticated
    ? ["Github", "Players", "Teams"]
    : ["Github", "Players", "Teams"];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState("EUR");
  const handleCurrencyChange = (event) => {
    setCurrentCurrency(event.target.value);
    setSelectedCurrency(event.target.value);
  };

  React.useEffect(() => {
    console.log("currentCurrency", currentCurrency);
    setCurrentCurrency(currentCurrency);
  }, [currentCurrency]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  console.log("test", window);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
          >
            <Link
              to="/"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              FIFA KBE
            </Link>
            <Box sx={{ minWidth: 120 }}>
              <FormControl>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currentCurrency}
                  onChange={handleCurrencyChange}
                >
                  <MenuItem value={"EUR"}>Euro</MenuItem>
                  <MenuItem value={"USD"}>Dollar</MenuItem>
                  <MenuItem value={"BTC"}>Bitcoin</MenuItem>
                  <MenuItem value={"GBP"}>Pound</MenuItem>
                  <MenuItem value={"CHF"}>Swiss Franc</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                style={{ textDecoration: "inherit", color: "inherit" }}
                state={{ currentCurrency: currentCurrency }}
              >
                <Button color="inherit" style={{ textDecoration: "inherit" }}>
                  {item === "Logout" ? (
                    <div onClick={() => setIsLoggedIn(false)}>{item}</div>
                  ) : (
                    item
                  )}
                </Button>
              </Link>
            ))}
          </Box>
          <div className="hover:text-gray-200">
            {!keycloak.authenticated && (
              <button
                type="button"
                className="text-blue-800"
                onClick={() => keycloak.login()}
              >
                Login
              </button>
            )}

            {!!keycloak.authenticated && (
              <button
                type="button"
                className="text-blue-800"
                onClick={() => keycloak.logout()}
              >
                Logout ({keycloak.tokenParsed.preferred_username})
              </button>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav"></Box>
      <Box component="main" sx={{ p: 3 }}></Box>
      <Toolbar />
    </Box>
  );
}
