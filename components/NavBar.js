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

const Logo = styled.img``;

const LogoButton = styled(Button)`
  ${(props) => props.theme.breakpoints.down("sm")} {
    flex-grow: 1;
  }
`;

const StyledToolbar = (props) => (
  <Toolbar
    sx={{
      minHeight: { xs: 64, sm: 88 },
      maxHeight: { xs: 64, sm: 88 },
      ["&, & img"]: {
        height: { xs: 64, sm: 88 },
      },
    }}
    {...props}
  />
);

const DesktopOnlyBox = styled(Box)`
  height: 100%;
  display: flex;

  ${(props) => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`;

const pages = [
  {
    label: "Link1",
    href: "/link1",
  },
  {
    label: "Link2",
    href: "/link2",
  },
  {
    label: "Link3",
    href: "/link3",
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
            <Link href="/" passHref>
              <LogoButton aria-label="Go to home page">
                <Logo alt="Logo" src="/static/logo.svg" />
              </LogoButton>
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
            <DesktopOnlyBox>
              {pages.map(({ label, href }) => (
                <Link key={href} href={href} passHref>
                  <Button>
                    <Typography variant="body1">{label}</Typography>
                  </Button>
                </Link>
              ))}
            </DesktopOnlyBox>
          </StyledToolbar>
        </Container>
      </AppBar>
      <StyledToolbar />
    </>
  );
};

export default NavBar;
