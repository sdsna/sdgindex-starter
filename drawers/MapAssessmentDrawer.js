import Link from "next/link";
import { Box, ButtonBase, Divider, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import DimensionIcon from "components/DimensionIcon";
import DrawerSection from "components/DrawerSection";
import DrawerHeading from "components/DrawerHeading";
import DrawerHeadingWithCaption from "components/DrawerHeadingWithCaption";
import DrawerText from "components/DrawerText";
import MapLegendValues from "components/MapLegendValues";
import MapLegend from "components/MapLegend";
import MapLegendItem from "components/MapLegendItem";
import { mapAssessmentUrl } from "helpers/routing";
import { isGoal, isIndicator } from "@sdgindex/data/assessments";
import IndicatorMetadata from "components/IndicatorMetadata";

const IndicatorButton = styled(ButtonBase)(
  {
    borderRadius: 4,
    padding: 4,
    textAlign: "left",
    alignItems: "flex-start",
    width: "100%",
    justifyContent: "flex-start",
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  },
  ({ disabled }) => disabled && { color: "rgba(0, 0, 0, 0.54)" }
);
IndicatorButton.defaultProps = {
  focusRipple: true,
};

const DimensionInfo = ({ dimension, dimensions, indicators }) => (
  <>
    <DrawerSection display={{ xs: "block", lg: "none" }}>
      <DrawerHeadingWithCaption caption="Click on a dimension to visualize it on the map.">
        Performance by Dimension
      </DrawerHeadingWithCaption>
      <Grid container style={{ margin: -2, width: "auto" }}>
        {dimensions.map((dimension) => (
          <Grid item key={dimension.id} style={{ maxWidth: "25%", padding: 2 }}>
            <Link href={mapAssessmentUrl({ assessment: dimension })} passHref>
              <ButtonBase>
                <DimensionIcon identifier={dimension.id} />
              </ButtonBase>
            </Link>
          </Grid>
        ))}
      </Grid>
    </DrawerSection>
    <Divider sx={{ display: { xs: "block", lg: "none" } }} />
    <DrawerSection>
      <DrawerHeading>Description</DrawerHeading>
      <DrawerText>{dimension.description}</DrawerText>
    </DrawerSection>
    <DrawerSection>
      <DrawerHeading>Indicators</DrawerHeading>
      <Box marginX={-0.5}>
        {indicators.map((indicator) => (
          <Link
            key={indicator.id}
            href={mapAssessmentUrl({ assessment: indicator })}
            passHref
          >
            <IndicatorButton disabled={indicator.hideMap}>
              <DrawerText>{indicator.label}</DrawerText>
            </IndicatorButton>
          </Link>
        ))}
      </Box>
    </DrawerSection>
  </>
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

const MapAssessmentDrawer = ({ assessment, dimension, dimensions, legend }) => (
  <>
    <Legend dimension={dimension} legend={legend} assessment={assessment} />
    <Divider />
    {isGoal(assessment) && (
      <DimensionInfo
        dimension={assessment}
        dimensions={dimensions}
        indicators={assessment.indicators}
      />
    )}
    {isIndicator(assessment) && <IndicatorMetadata indicator={assessment} />}
  </>
);

export default MapAssessmentDrawer;
