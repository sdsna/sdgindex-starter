import Link from "next/link";
import { observer } from "mobx-react-lite";
import { Divider, Typography, Box } from "@mui/material";
import DrawerSection from "components/DrawerSection";
import DrawerHeadingWithCaption from "components/DrawerHeadingWithCaption";
import DrawerLoadingIndicator from "components/DrawerLoadingIndicator";
import IndicatorMetadata from "components/IndicatorMetadata";
import IndicatorPerformance from "components/IndicatorPerformance";
import DimensionIndicator from "components/DimensionIndicator";
import DrawerRegionSection from "components/DrawerRegionSection";
import { useUiStore } from "stores/uiStore";
import {
  findRegionById,
  findAssessmentForRegionById,
  useDataStore,
} from "@sdgindex/data";
import {
  isGoal,
  isIndicator,
  isRelevantIndicatorForRegion,
} from "@sdgindex/data/assessments";
//import { getRating } from "@sdgindex/data/observations";
import { mapAssessmentUrl } from "helpers/routing";
import { getIndicatorsForDepartmentByDimension } from "helpers/getIndicatorsForDepartmentByDimension";
import { getValueAsText } from "@sdgindex/data/cjs/observations/getValueAsText";
import ValueIcon from "components/ValueIcon";

// const CustomAssessmentSection = ({ country, assessment, dimensions }) => (
//   <>
//     <DrawerRegionSection region={country} clearTarget />
//     <Divider />
//     {dimensions.map((dimension) => (
//       <DrawerSection key={dimension.label} gray>
//         <DrawerHeadingWithCaption caption="Click on an indicator to visualize it on the map.">
//           {dimension.label}
//         </DrawerHeadingWithCaption>
//         {dimension.indicators.map((indicator) => (
//           <Link
//             key={indicator.id}
//             href={mapAssessmentUrl({ assessment: indicator })}
//             passHref
//           >
//             <GoalIndicator
//               onClick={null}
//               indicator={indicator}
//             />
//           </Link>
//         ))}
//       </DrawerSection>
//     ))}
//   </>
// );
const IconLabel = (props) => (
  <Typography marginLeft={1} variant="body2" {...props} />
);

const Row = (props) => (
  <Box
    marginY={0.5}
    display="flex"
    alignItems="center"
    sx={{
      [":first-of-type"]: {
        marginTop: 0,
      },
      [":last-of-type"]: {
        marginBottom: 0,
      },
    }}
    {...props}
  />
);

const IndicatorSection = ({ department, indicator }) => (
  <>
    <DrawerRegionSection region={department} clearTarget />
    <Divider />
    <IndicatorPerformance indicator={indicator} gray />
    <Divider />
    <IndicatorMetadata
      drawerSectionProps={{ gray: true }}
      indicator={indicator}
    />
  </>
);

const DimensionSection = ({ department, dimension, indicators }) => (
  <>
    <DrawerRegionSection region={department} clearTarget />
    <Divider />
    <DrawerSection>
      <Row>
        <ValueIcon />
        <IconLabel>{dimension.score}</IconLabel>
      </Row>
    </DrawerSection>
    <Divider />
    <DrawerSection gray>
      <DrawerHeadingWithCaption caption="Click on an indicator to visualize it on the map.">
        Indicators
      </DrawerHeadingWithCaption>
      {indicators.map((indicator) => (
        <Link
          key={indicator.id}
          href={mapAssessmentUrl({ assessment: indicator })}
          passHref
        >
          <DimensionIndicator
            onClick={null}
            buttonProps={{ component: "a" }}
            indicator={indicator}
            value={getValueAsText(indicator)}
            light={false}
            disabled={indicator.hideMap}
          />
        </Link>
      ))}
    </DrawerSection>
  </>
);

const MapDepartmentDrawer = observer(({ assessment: { id: assessmentId } }) => {
  const uiStore = useUiStore();
  const { isLoaded } = useDataStore();

  if (!isLoaded) return <DrawerLoadingIndicator />;

  const department = findRegionById(uiStore.target.id);
  const assessment = findAssessmentForRegionById(department, assessmentId);

  if (isGoal(assessment)) {
    const indicatorsForDimension = getIndicatorsForDepartmentByDimension(
      department,
      assessment
    ).filter((indicator) =>
      isRelevantIndicatorForRegion(indicator, department)
    );

    return (
      <DimensionSection
        department={department}
        dimension={assessment}
        indicators={indicatorsForDimension}
      />
    );
  }

  if (isIndicator(assessment)) {
    return <IndicatorSection department={department} indicator={assessment} />;
  }
});

export default MapDepartmentDrawer;
