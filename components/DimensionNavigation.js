import Link from "next/link";
import { observer } from "mobx-react-lite";
import { Box, ButtonBase, Divider, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import DrawerHeading from "components/DrawerHeading";
import DimensionIcon from "components/DimensionIcon";
import { mapAssessmentUrl } from "helpers/routing";

const Button = styled(ButtonBase)({
  transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  ":hover": {
    transform: "scale(1.2)",
  },
});

Button.defaultProps = {
  component: "a",
};

const Layout = (props) => (
  <>
    <Divider />
    <Paper elevation={5} square>
      <Box
        display={{ xs: "none", lg: "flex" }}
        flexDirection="column"
        alignItems="center"
        bgcolor="whitesmoke"
        paddingY={1}
        paddingX={1}
        {...props}
      />
    </Paper>
  </>
);

const DimensionNavigation = observer(({ dimensions }) => {
  return (
    <Layout>
      <DrawerHeading>
        Select one of the dimensions to see it on the map
      </DrawerHeading>
      <Grid container spacing={1} columns={4}>
        <Grid item xs={2}>
          {dimensions.map((dimension) => (
            <Link
              key={dimension.id}
              href={mapAssessmentUrl({ assessment: dimension })}
              passHref
            >
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
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
});

export default DimensionNavigation;
