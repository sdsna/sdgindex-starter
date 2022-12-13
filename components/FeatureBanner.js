import Link from "next/link";
import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const positionRightMixin = {
  borderLeftWidth: 1,
  order: 3,
  ":hover": {
    img: {
      transform: "scale(1.20)",
    },
  },
};

const positionLeftMixin = {
  borderRightWidth: 1,
  order: 1,
  ":hover": {
    img: {
      transform: "scale(1.20)",
    },
  },
};

const ResponsiveCardContent = styled(CardContent)(({ styled, theme }) => ({
  "&&, &&:last-of-type": {
    padding: 16,
    paddingTop: styled?.noPaddingTopOnSmallScreen ? 0 : 16,
    [theme.breakpoints.up("md")]: {
      padding: 32,
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

const ResponsiveButtonContainer = (props) => (
  <Box sx={{ flexDirection: { xs: "column", md: "row" } }} {...props} />
);

const GridButton = styled(Grid)(
  ({ theme }) => ({
    border: "0px solid #ddd",
    "&, img": {
      transition: "transform 0.3s ease-in-out",
    },
    ":hover": {
      background: "rgba(0, 0, 0, 0.1)",
    },
    img: {
      maxWidth: "100%",
      filter: "drop-shadow(5px 7px 5px rgba(0, 0, 0, 0.3))",
    },
    [theme.breakpoints.down("md")]: {
      order: 1,
      justifyContent: "center",
      borderWidth: 0,
    },
  }),
  ({ styled }) => styled.imagePosition === "right" && positionRightMixin,
  ({ styled }) => styled.imagePosition === "left" && positionLeftMixin,
  ({ styled, theme }) =>
    styled.imageOrientation === "horizontal" && {
      img: { height: 100, [theme.breakpoints.down("md")]: { height: 75 } },
    },
  ({ styled, theme }) =>
    styled.imageOrientation === "vertical" && {
      img: { width: 100, [theme.breakpoints.down("md")]: { width: 100 } },
    }
);
GridButton.defaultProps = { component: ButtonBase };

const FeatureBanner = ({
  title,
  children,
  links,
  image,
  imagePosition = "left",
  imageOrientation = "horizontal",
}) => (
  <Card>
    <Grid container spacing={0}>
      <Link href={links[0].href} legacyBehavior passHref>
        <GridButton
          item
          lg={3}
          md={4}
          xs={12}
          styled={{ imagePosition, imageOrientation }}
        >
          <ResponsiveCardContent>
            <img src={image} />
          </ResponsiveCardContent>
        </GridButton>
      </Link>
      <Grid item lg={9} md={8} style={{ order: 2 }}>
        <ResponsiveCardContent styled={{ noPaddingTopOnSmallScreen: true }}>
          <Box marginBottom={2}>
            <Typography variant="h2">{title}</Typography>
          </Box>
          <Box marginBottom={1}>
            <Typography variant="body1">{children}</Typography>
          </Box>
          <ResponsiveButtonContainer
            display="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            {links.map(
              ({ label, href, variant, target = null, onClick = null }) => (
                <Box key={href} marginY={1} marginRight={2}>
                  <Link href={href} legacyBehavior passHref>
                    <Button
                      target={target}
                      variant={variant || "contained"}
                      onClick={onClick}
                    >
                      {label}
                    </Button>
                  </Link>
                </Box>
              )
            )}
          </ResponsiveButtonContainer>
        </ResponsiveCardContent>
      </Grid>
    </Grid>
  </Card>
);

export default FeatureBanner;
