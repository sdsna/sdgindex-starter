import Link from "next/link";
import { observer } from "mobx-react-lite";
import { Box, ButtonBase, Paper, Stack } from "@mui/material";
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

const Layout = (props) => (
  <Paper elevation={5} sx={{ borderRadius: 1 }}>
    <Box
      display={{ xs: "none", lg: "flex" }}
      borderRadius={1}
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
    <Stack direction="row" spacing={1}>
      {dimensions.map((dimension) => (
        <Box
          key={dimension.id}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
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
