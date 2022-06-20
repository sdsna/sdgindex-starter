import { Box } from "@mui/material";
import MapLayout from "layouts/MapLayout";
import MapDrawer from "drawers/MapDrawer";
import MapControls from "components/MapControls";
// import { getRatingColor, getRatingLabel } from "helpers/ratings";
// import { mapAssessmentUrl } from "helpers/routing";
import { isRelevantIndicatorForRegion } from "@sdgindex/data/assessments";
// import { getValueColor, valueToScore } from "helpers/scores";
import { getDepartmentFill, LEGEND } from "helpers/legendForScore";
import { getTooltipTextForScore } from "helpers/getTooltipTextForScore";

const IndicatorMap = ({ zoomIn, zoomOut, resetZoom }) => (
  <Box>
    <MapControls
      links={{}}
      zoomIn={zoomIn}
      zoomOut={zoomOut}
      resetZoom={resetZoom}
    />
  </Box>
);

IndicatorMap.Layout = MapLayout;
IndicatorMap.layoutProps = ({ dimension, departments }) => ({
  assessment: dimension,
  departments: departments.map((department) => ({
    fill: getDepartmentFill(department),
    ...department,
  })),
  getTooltipText: getTooltipTextForScore,
  Drawer: (
    <MapDrawer assessment={dimension} dimension="score" legend={LEGEND} />
  ),
});

import {
  findIndicatorBySlug,
  getRegionsWithAssessment,
  loadData,
  getGoals,
} from "@sdgindex/data";
// import { getRating } from "@sdgindex/data/observations";
// import { getValue } from "@sdgindex/data/observations";
import { isCountry } from "@sdgindex/data/regions";

IndicatorMap.getInitialProps = async ({ query }) => {
  await loadData({ timeseries: true });

  const { params } = query;
  const [assessmentSlug] = params;

  const dimension = findIndicatorBySlug(assessmentSlug.toLowerCase());
  const goals = getGoals();

  if (dimension.hideMap)
    throw Error(
      `The indicator ${dimension.label} cannot be displayed on the map.`
    );

  const dimensionProps = {
    id: dimension.id,
    slug: dimension.slug,
    label: dimension.label,
    unit: dimension.unit,
    description: dimension.description,
    goalNumber: dimension.goalNumber,
    longTermObjective: dimension.longTermObjective,
    longTermObjectiveReason: dimension.longTermObjectiveReason,
    lowerBound: dimension.lowerBound,
    link: dimension.link,
    reference: dimension.reference,
    type: dimension.type,
  };

  const departments = getRegionsWithAssessment(dimension)
    .filter(isCountry) // Only keep relevant departments for the assessment
    .filter((department) =>
      isRelevantIndicatorForRegion(dimension, department)
    );

  return {
    goals: goals.map((goal) => ({
      id: goal.id,
      number: goal.number,
      type: goal.type,
    })),
    dimension: dimensionProps,
    departments: departments.map((department) => ({
      id: department.id,
      name: department.name,
      // rating: getRating(country),
      value: department.value,
      region: department.region,
      type: department.type,
    })),
  };
};

export default IndicatorMap;
