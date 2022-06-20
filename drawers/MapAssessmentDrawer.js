import Link from "next/link";
import { Box, ButtonBase, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import DrawerSection from "components/DrawerSection";
import DrawerHeading from "components/DrawerHeading";
//import DrawerHeadingWithCaption from "components/DrawerHeadingWithCaption";
import DrawerText from "components/DrawerText";
import MapLegend from "components/MapLegend";
import MapLegendItem from "components/MapLegendItem";
import { mapAssessmentUrl } from "helpers/routing";
import {
  isGoal,
  //isIndicator,
} from "@sdgindex/data/assessments";

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

const DimensionInfo = ({ dimension, indicators }) => {
  return (
    <>
      <DrawerSection>
        <DrawerHeading>Description</DrawerHeading>
        <DrawerText>{dimension.description}</DrawerText>
      </DrawerSection>
      <DrawerSection>
        <DrawerHeading>Indicators</DrawerHeading>
        {/* <Box marginX={-0.5}>
          {indicators.map((indicator, key) => (
            <IndicatorButton key={key}>
              <DrawerText>{indicator.label}</DrawerText>
            </IndicatorButton>
          ))}
        </Box> */}
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
};

// const OverallInfo = ({ overall }) => (
//   <>
//     <DrawerSection>
//       <DrawerHeading>Description</DrawerHeading>
//       <DrawerText>{overall.description}</DrawerText>
//     </DrawerSection>
//     <Divider />
//     <Divider />
//   </>
// );

// const CustomAssessmentInfo = ({ assessment, dimensions }) => (
//   <>
//     <DrawerSection>
//       <DrawerHeading>Description</DrawerHeading>
//       <DrawerText>{assessment.description}</DrawerText>
//     </DrawerSection>
//     <Divider />
//     {dimensions.map((dimension) => (
//       <DrawerSection key={dimension.label}>
//         <DrawerHeadingWithCaption caption="Click on an indicator to visualize it on the map.">
//           {dimension.label}
//         </DrawerHeadingWithCaption>
//         <Box marginX={-0.5}>
//           {dimension.indicators.map((indicator) => (
//             <Link
//               key={indicator.id}
//               href={mapAssessmentUrl({ assessment: indicator })}
//               passHref
//             >
//               <IndicatorButton>
//                 <DrawerText>{indicator.label}</DrawerText>
//               </IndicatorButton>
//             </Link>
//           ))}
//         </Box>
//       </DrawerSection>
//     ))}
//   </>
// );

const Legend = ({ legend }) => {
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
};

const MapAssessmentDrawer = ({ assessment, dimension, legend }) => (
  <>
    <Legend dimension={dimension} legend={legend} assessment={assessment} />
    <Divider />
    {isGoal(assessment) && (
      <DimensionInfo
        dimension={assessment}
        indicators={assessment.indicators}
      />
    )}
    {/* {isIndicator(assessment) && <IndicatorMetadata indicator={assessment} />} */}
  </>
);

export default MapAssessmentDrawer;
