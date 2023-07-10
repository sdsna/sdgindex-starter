import Link from "next/link";
import { observer } from "mobx-react-lite";
import { Divider } from "@mui/material";
import DrawerSection from "components/DrawerSection";
import DrawerHeadingWithCaption from "components/DrawerHeadingWithCaption";
import DrawerLoadingIndicator from "components/DrawerLoadingIndicator";
import IndicatorMetadata from "components/IndicatorMetadata";
import DimensionPerformance from "components/DimensionPerformance";
import IndicatorPerformance from "components/IndicatorPerformance";
import DimensionIndicator from "components/DimensionIndicator";
import { getRating, getTrend } from "@sdgindex/data/observations";
import DrawerRegionSection from "components/DrawerRegionSection";
import { useUiStore } from "stores/uiStore";
import {
  findRegionById,
  findAssessmentForRegionById,
  useDataStore,
} from "@sdgindex/data";
import { isGoal, isIndicator } from "@sdgindex/data/assessments";
import { mapAssessmentUrl } from "helpers/routing";
import { getIndicatorsForDepartmentByDimension } from "helpers/getIndicatorsForDepartmentByDimension";

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
    <DimensionPerformance goal={dimension} />
    <Divider />
    <DrawerSection gray>
      <DrawerHeadingWithCaption caption="Cliquez sur un indicateur pour le visualiser sur la carte.">
        Indicateurs
      </DrawerHeadingWithCaption>
      {indicators.map((indicator) => (
        <Link
          key={indicator.id}
          href={mapAssessmentUrl({ assessment: indicator })}
          legacyBehavior
          passHref
        >
          <DimensionIndicator
            onClick={null}
            indicator={indicator}
            rating={getRating(indicator)}
            trend={getTrend(indicator)}
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
