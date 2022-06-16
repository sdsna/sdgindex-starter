// import Link from "next/link";
import { ButtonBase, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import DrawerSection from "components/DrawerSection";
import DrawerHeading from "components/DrawerHeading";
//import DrawerHeadingWithCaption from "components/DrawerHeadingWithCaption";
import DrawerText from "components/DrawerText";
import MapLegend from "components/MapLegend";
import MapLegendItem from "components/MapLegendItem";
//import { mapAssessmentUrl } from "helpers/routing";
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

const GoalInfo = ({ goal }) => {
  return (
    <>
      <DrawerSection>
        <DrawerHeading>Description</DrawerHeading>
        <DrawerText>{goal.description}</DrawerText>
      </DrawerSection>
    </>
  );
};

// const OverallInfo = ({ overall, goals }) => (
//   <>
//     <DrawerSection>
//       <DrawerHeading>Description</DrawerHeading>
//       <DrawerText>{overall.description}</DrawerText>
//     </DrawerSection>
//     <Divider />
//     <DrawerSection>
//       <DrawerHeadingWithCaption caption="Display countries' transboundary impacts.">
//         Spillover Index
//       </DrawerHeadingWithCaption>
//       <Box marginY={1}>
//         <Link href={mapSpilloversUrl()} passHref>
//           <Button size="small" variant="outlined">
//             View Spillovers
//           </Button>
//         </Link>
//       </Box>
//     </DrawerSection>
//     <Divider />
//     <DrawerSection display={{ xs: "block", lg: "none" }}>
//       <DrawerHeadingWithCaption caption="Click on a goal to visualize it on the map.">
//         Performance by SDG
//       </DrawerHeadingWithCaption>
//       <Grid container style={{ margin: -2, width: "auto" }}>
//         {goals.map((goal) => (
//           <Grid item key={goal.id} style={{ maxWidth: "25%", padding: 2 }}>
//             <Link href={mapAssessmentUrl({ assessment: goal })} passHref>
//               <ButtonBase style={{ background: getColor(goal.number) }}>
//                 <GoalIcon identifier={goal.id} flavor="white" />
//               </ButtonBase>
//             </Link>
//           </Grid>
//         ))}
//       </Grid>
//     </DrawerSection>
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
      <GoalInfo goal={assessment} indicators={assessment.indicators} />
    )}
    {/* {isIndicator(assessment) && <IndicatorMetadata indicator={assessment} />} */}
  </>
);

export default MapAssessmentDrawer;
