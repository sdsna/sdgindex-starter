import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  ButtonBase,
  Container,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "mdi-material-ui";
import { styled } from "@mui/material/styles";
import NavBarDrawer from "components/NavBarDrawer";

const Button = styled(ButtonBase)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignSelf: "stretch",
  paddingLeft: 16,
  paddingRight: 16,
});

const Logo = styled("img")``;

const StyledToolbar = (props) => (
  <Toolbar
    sx={{
      minHeight: { xs: 64, sm: 88 },
      maxHeight: { xs: 64, sm: 88 },
      ["&, & img"]: {
        height: 64,
        padding: { xs: "8px 0", sm: 0 },
      },
    }}
    {...props}
  />
);

const pages = [
  {
    label: "Chapitres",
    href: "/chapitres",
  },
  {
    label: "Carte interactive",
    href: "/carte/dimensions/lnob1",
  },
  {
    label: "Profils",
    // TODO: Update link with production one
    href: "https://deploy-preview-16--national-comparison-benin-sdg-index.netlify.app/profils",
    // href: "https://regional-benin.sdgindex.org/profils",
  },
  {
    label: "Téléchargements et documents",
    href: "/telechargements",
  },
];

const NavBar = ({ fluid }) => {
  let containerProps = { maxWidth: "lg", style: { padding: "0 8px" } };

  if (fluid) containerProps = { maxWidth: false };

  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const toggleNavDrawer = () => setShowNavDrawer(!showNavDrawer);

  return (
    <>
      <AppBar position="fixed">
        <Container {...containerProps} disableGutters={true}>
          <StyledToolbar disableGutters={true}>
            <Hidden implementation="css" mdUp>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={toggleNavDrawer}
              >
                <Menu />
              </IconButton>
            </Hidden>
            <Link href="/" legacyBehavior passHref>
              <Button
                sx={{ flexGrow: { xs: 1, md: 0 } }}
                aria-label="Go to home page"
              >
                <Logo alt="Logo" src="/static/logo.png" />
              </Button>
            </Link>
            <Hidden implementation="css" mdUp>
              <IconButton
                style={{ visibility: "hidden" }}
                color="inherit"
                aria-label="menu"
              >
                <Menu />
              </IconButton>
            </Hidden>
            <Hidden implementation="js" mdUp>
              <NavBarDrawer
                open={showNavDrawer}
                onClose={toggleNavDrawer}
                pages={pages}
              />
            </Hidden>
            <Box display={{ xs: "none", md: "flex" }} height={1}>
              {pages.map(({ label, href }) => (
                <Link key={href} href={href} legacyBehavior passHref>
                  <Button>
                    <Typography variant="body1">{label}</Typography>
                  </Button>
                </Link>
              ))}
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>
      <StyledToolbar />
    </>
  );
};

export default NavBar;
