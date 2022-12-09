import Link from "next/link";
import { observer } from "mobx-react-lite";
import { Box, ButtonBase, Paper, Stack, Typography } from "@mui/material";
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
    <DrawerHeading>Sélectionnez une dimension</DrawerHeading>
    <Stack direction="column" spacing={1}>
      {dimensions.map((dimension) => (
        <Box
          key={dimension.id}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Typography variant="body1" gutterBottom>
            {dimension.category.replace(
              dimension.category[0],
              dimension.category[0].toUpperCase()
            )}
          </Typography>
          <Link
            href={mapAssessmentUrl({ assessment: dimension })}
            legacyBehavior
            passHref
          >
            <Button
              sx={{
                background: "transparent",
                maxWidth: 60,
                maxHeight: 60,
                marginLeft: 3,
              }}
            >
              <DimensionIcon identifier={dimension.id} />
            </Button>
          </Link>
        </Box>
      ))}
    </Stack>
  </Layout>
));

export default DimensionNavigation;
