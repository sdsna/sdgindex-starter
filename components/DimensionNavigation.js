import Link from "next/link";
import { observer } from "mobx-react-lite";
import { Box, ButtonBase, Paper, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import DrawerHeading from "components/DrawerHeading";
import DimensionIcon from "components/DimensionIcon";
import { mapAssessmentUrl } from "helpers/routing";

const Button = styled(ButtonBase)({
  transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  ":hover": {
    transform: "scale(1.1)",
  },
});

Button.defaultProps = {
  component: "a",
};

const Layout = (props) => (
  <Paper elevation={5} sx={{ borderRadius: 5 }}>
    <Box
      display={{ xs: "none", lg: "flex" }}
      borderRadius={5}
      flexDirection="column"
      alignItems="center"
      bgcolor="whitesmoke"
      paddingY={1}
      paddingX={1}
      {...props}
    />
  </Paper>
);

const DimensionNavigation = observer(({ dimensions }) => (
  <Layout>
    <DrawerHeading>
      {"Sélectionnez l'une des dimensions pour la voir sur la carte."}
    </DrawerHeading>
    <Grid container style={{ margin: -2, width: "auto" }}>
      {dimensions.map((dimension) => (
        <Grid item key={dimension.id} style={{ marginLeft: 5, marginRight: 5 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1" gutterBottom>
              {dimension.category.replace(
                dimension.category[0],
                dimension.category[0].toUpperCase()
              )}
            </Typography>
            <Link href={mapAssessmentUrl({ assessment: dimension })} passHref>
              <Button
                sx={{
                  background: "transparent",
                  maxWidth: 60,
                  maxHeight: 60,
                }}
              >
                <DimensionIcon identifier={dimension.id} />
              </Button>
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Layout>
));

export default DimensionNavigation;
