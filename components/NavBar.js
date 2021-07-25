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
} from "@material-ui/core";
import { Menu } from "mdi-material-ui";
import styled from "styled-components";
import NavBarDrawer from "components/NavBarDrawer";

const Button = styled(ButtonBase).attrs({
  component: "a",
})`
  && {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-self: stretch;
    padding: 0 16px;
  }
`;

const Logo = styled.img``;

const LogoButton = styled(Button)`
  ${(props) => props.theme.breakpoints.down("sm")} {
    flex-grow: 1;
  }
`;

const StyledToolbar = styled(Toolbar)`
  && {
    min-height: 64px;
    height: 64px
    max-height: 64px;

    ${Logo} {
      height: 64px;
      padding: 8px 0;
    }

    ${(props) => props.theme.breakpoints.up("sm")} {
      min-height: 88px;
      height: 88px;
      max-height: 88px;

      ${Logo} {
        height: 88px;
        padding: 12px 0;
      }
    }
  }
`;

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