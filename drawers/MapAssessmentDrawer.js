import Link from "next/link";
import {
  Table,
  TableBody,
  TableRow,
  ButtonBase,
  TableCell,
  Divider,
  Grid,
} from "@mui/material";
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
import { isLnobDimension, isIndicator } from "@sdgindex/data/assessments";
import IndicatorMetadata from "components/IndicatorMetadata";

const TableBodyWithAlternatingRows = styled(TableBody)`
  & > tr:nth-of-type(odd) {
      background: #e9faff;
    }
  }
  `;

const IndicatorButton = styled(ButtonBase)(
  {
    borderRadius: 4,
    padding: 4,
    textAlign: "left",
    alignItems: "flex-start",
    width: "100%",
    justifyContent: "flex-start",
  },
  ({ disabled }) => disabled && { color: "rgba(0, 0, 0, 0.54)" }
);
IndicatorButton.defaultProps = {
  focusRipple: true,
};

const DimensionInfo = ({ dimension, dimensions, indicators }) => (
  <>
    <DrawerSection display={{ xs: "block", lg: "none" }}>
      <DrawerHeadingWithCaption caption="Cliquez sur une dimension pour la visualiser sur la carte.">
        Performance par dimension
      </DrawerHeadingWithCaption>
      <Grid container style={{ margin: -2, width: "auto" }}>
        {dimensions.map((dimension) => (
          <Grid item key={dimension.id} style={{ maxWidth: "25%", padding: 2 }}>
            <Link
              href={mapAssessmentUrl({ assessment: dimension })}
              legacyBehavior
              passHref
            >
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
      <DrawerHeading>Indicateurs</DrawerHeading>
      <Table size="small">
        <TableBodyWithAlternatingRows>
          {indicators.map((indicator) => (
            <TableRow hover key={indicator.id}>
              <TableCell style={{ borderBottom: "none" }}>
                <Link
                  href={mapAssessmentUrl({ assessment: indicator })}
                  legacyBehavior
                  passHref
                >
                  <IndicatorButton disabled={indicator.hideMap}>
                    <DrawerText>{indicator.label}</DrawerText>
                  </IndicatorButton>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBodyWithAlternatingRows>
      </Table>
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

const MapAssessmentDrawer = ({ assessment, dimensions, legend }) => (
  <>
    <DrawerSection display={{ xs: "block", lg: "none" }}>
      <Legend legend={legend} assessment={assessment} />
      <Divider />
    </DrawerSection>
    {isLnobDimension(assessment) && (
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
