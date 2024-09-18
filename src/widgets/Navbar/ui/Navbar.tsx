import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { RoutePath } from "../../../shared/config/routerConfig";
import { CustomNavLink } from "./CustomNavLink";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "stretch",
              gap: 1,
            }}
          >
            <CustomNavLink to={RoutePath.main}>Главная</CustomNavLink>
            <CustomNavLink to={RoutePath.orgs}>Организаторы</CustomNavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
