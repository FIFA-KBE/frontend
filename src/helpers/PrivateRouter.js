import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak();
  console.log("keycloak", keycloak);
  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? (
    children
  ) : (
    <h1 align="center">Not logged in! Please Login</h1>
  );
};

export default PrivateRoute;
