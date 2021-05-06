import Link from "next/link";
import { Box, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import styled from "styled-components";

const ListItemLogo = styled(ListItem)`
  &&,
  &&:hover {
    background: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
`;

const NavBarDrawer = ({ pages, ...otherProps }) => (
  <Drawer {...otherProps}>
    <List disablePadding>
      <Link href="/" passHref>
        <Box paddingY={2} clone>
          <ListItemLogo button component="a">
            <img src="/static/logo.svg" alt="Logo" style={{ height: 80 }} />
          </ListItemLogo>
        </Box>
      </Link>
      {pages.map(({ href, label }) => (
        <Link key={href} href={href} passHref>
          <ListItem button component="a" divider>
            <ListItemText primary={label} />
          </ListItem>
        </Link>
      ))}
    </List>
  </Drawer>
);

export default NavBarDrawer;
