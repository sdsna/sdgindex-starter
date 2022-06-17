import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import contentSizeQuery from "helpers/contentSizeQuery";

const FooterTypography = (props) => (
  <Typography color="#fff" variant="body2" {...props} />
);

const ResponsiveGridItem = styled(Grid)(
  (props) => ({
    flexBasis: `${props.styled.width * 100}%`,
    maxWidth: `${props.styled.width * 100}%`,
  }),
  contentSizeQuery("medium-down", {
    maxWidth: "100%",
    flexBasis: "100%",
    textAlign: "center",
    [":not(:first-of-type)"]: {
      marginTop: 16,
    },
  })
);
ResponsiveGridItem.defaultProps = { item: true };

const Logo = styled("img")({ height: 80 });

const BoxWithShadow = styled(Box)`
  box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Footer = () => (
  <BoxWithShadow
    paddingY={4}
    position="relative"
    style={{ background: "#020722" }}
  >
    <Container maxWidth="lg">
      <Grid container>
        <ResponsiveGridItem styled={{ width: 1 / 3 }}>
          <Logo
            alt="Logo"
            src="/static/logo.svg"
            style={{ height: 80, marginBottom: 8 }}
          />
        </ResponsiveGridItem>
        <ResponsiveGridItem styled={{ width: 2 / 3 }}>
          <FooterTypography gutterBottom>
            Nullam imperdiet nunc eros, quis laoreet nisi cursus at. Suspendisse
            potenti. Vivamus sed metus non metus luctus placerat. Pellentesque
            vel auctor lacus. Phasellus sit amet pellentesque lacus. Curabitur
            accumsan interdum risus vitae condimentum. Maecenas at dui dolor.
            Mauris at orci a lectus tristique efficitur ut ac sem. Nullam mattis
            varius arcu, sed placerat nisl venenatis vel.
          </FooterTypography>
        </ResponsiveGridItem>
      </Grid>
    </Container>
  </BoxWithShadow>
);

export default Footer;
