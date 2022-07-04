import { Box, ButtonBase, Divider, Paper } from "@mui/material";
import { Plus, ArrowExpandAll, Minus } from "mdi-material-ui";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import MapFooter from "components/MapFooter";
import DimensionNavigation from "components/DimensionNavigation";
import MapLegendValues from "components/MapLegendValues";
import MapLegend from "components/MapLegend";
import MapLegendItem from "components/MapLegendItem";

const BoxWithoutPointerEvents = styled(Box)({
  pointerEvents: "none",
  "a, button": {
    pointerEvents: "auto",
  },
});

const TabButton = styled(ButtonBase)(
  {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    borderRight: "1px solid rgba(0,0,0,.12)",
    ":hover": {
      opacity: 1,
    },

    ":first-of-type": {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },

    ":last-child": {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      borderRight: "none",
    },
  },
  ({ theme, isactive }) => {
    if (isactive)
      return { color: "white", background: theme.palette.primary.main };
    return { opacity: 0.7, background: "white" };
  }
);

const Legend = ({ legend, assessment }) => {
  if (legend != null) {
    return (
      <MapLegend>
        {legend.map((item) => (
          <MapLegendItem
            key={item.color}
            color={item.color}
            label={item.label}
          />
        ))}
      </MapLegend>
    );
  }

  return (
    <MapLegendValues
      longTermObjective={assessment.longTermObjective}
      lowerBound={assessment.lowerBound}
    />
  );
};

const MapControls = ({
  zoomIn,
  zoomOut,
  resetZoom,
  assessment,
  dimensions,
  legend,
}) => (
  <>
    <BoxWithoutPointerEvents
      position="absolute"
      left={0}
      right={0}
      bottom={0}
      top={0}
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box
          marginLeft={2}
          marginTop={2}
          boxShadow={3}
          display="flex"
          borderRadius={2}
        >
          <Link
            href="https://national-comparison-benin-sdg-index.netlify.app/map"
            passHref
          >
            <TabButton>Régionale</TabButton>
          </Link>
          <Link href="/map/dimensions/LNOB1" passHref>
            <TabButton isactive>Infranationale</TabButton>
          </Link>
        </Box>
      </Box>
      <Box flexGrow={1} />
      <Paper elevation={5} sx={{ borderRadius: 5 }}>
        <Box
          marginRight={2}
          marginTop={14}
          boxShadow={3}
          borderRadius={5}
          display={{ xs: "none", lg: "block" }}
          bgcolor="whitesmoke"
          position="fixed"
          top="0"
          right="0"
        >
          <Legend legend={legend} assessment={assessment} />
        </Box>
      </Paper>
      <Box marginLeft={2} marginTop={2} display="flex">
        <DimensionNavigation dimensions={dimensions} />
      </Box>
      <Box display="flex" alignItems="flex-end" justifyContent="space-between">
        <Box
          marginRight={2}
          marginBottom={1}
          boxShadow={3}
          display="flex"
          flexDirection="column"
          bgcolor="white"
          borderRadius={2}
          position="fixed"
          right="0"
        >
          <ButtonBase
            variant="outlined"
            sx={{
              padding: 0.5,
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
            onClick={zoomIn}
            aria-label="Zoom in"
          >
            <Plus fontSize="small" />
          </ButtonBase>
          <Divider />
          <ButtonBase
            variant="outlined"
            sx={{ padding: 0.5 }}
            onClick={resetZoom}
            aria-label="Reset zoom"
          >
            <ArrowExpandAll fontSize="small" />
          </ButtonBase>
          <Divider />
          <ButtonBase
            variant="outlined"
            sx={{
              padding: 0.5,
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
            onClick={zoomOut}
            aria-label="Zoom out"
          >
            <Minus fontSize="small" />
          </ButtonBase>
        </Box>
      </Box>
      <Box display={{ xs: "none", md: "flex" }} justifyContent="right">
        <MapFooter />
      </Box>
    </BoxWithoutPointerEvents>
  </>
);

export default MapControls;
