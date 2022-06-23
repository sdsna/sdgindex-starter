import MapLayout from "layouts/MapLayout";
import MapDrawer from "drawers/MapDrawer";
import MapControls from "components/MapControls";
import { getValueColor, valueToScore } from "helpers/scores";

const formatNumberAsText = (
  number,
  decimals = 2,
  fallback = "Value unavailable"
) => {
  if (number != null) return number.toFixed(decimals);

  return fallback;
};

const Layout = MapLayout;
const layoutProps = ({ assessment, departments, dimensions }) => ({
  assessment,
  dimensions,
  stroke: "#cacaca",
  departments,
  getDepartmentFill: (department) => {
    const value = department.value;
    return getValueColor(
      valueToScore(value, assessment.longTermObjective, assessment.lowerBound)
    );
  },
  getTooltipText: (department) => formatNumberAsText(department.value),
  Drawer: <MapDrawer assessment={assessment} dimension={null} />,
});

const IndicatorMap = ({ zoomIn, zoomOut, resetZoom }) => (
  <MapControls
    links={{}}
    zoomIn={zoomIn}
    zoomOut={zoomOut}
    resetZoom={resetZoom}
  />
);

import {
  findIndicatorBySlug,
  getRegionsWithAssessment,
  loadData,
  getGoals,
} from "@sdgindex/data";
import { getValue } from "@sdgindex/data/observations";

IndicatorMap.getInitialProps = async ({ query }) => {
  await loadData();

  const { params } = query;
  const [assessmentSlug] = params;

  const assessment = findIndicatorBySlug(assessmentSlug.toLowerCase());
  const dimensions = getGoals();

  const assessmentProps = {
    id: assessment.id,
    slug: assessment.slug,
    label: assessment.label,
    unit: assessment.unit,
    description: assessment.description,
    goalNumber: assessment.goalNumber,
    longTermObjective: assessment.longTermObjective,
    longTermObjectiveReason: assessment.longTermObjectiveReason,
    lowerBound: assessment.lowerBound,
    link: assessment.link,
    reference: assessment.reference,
    type: assessment.type,
  };

  const departments = getRegionsWithAssessment(assessment);

  departments.forEach((department) => {
    department.value = getValue(department);
  });

  return {
    dimensions: dimensions.map((dimension) => ({
      id: dimension.id,
      number: dimension.number,
      type: dimension.type,
    })),
    assessment: assessmentProps,
    departments: departments.map((department) => ({
      id: department.id,
      name: department.name,
      value: department.value,
      type: department.type,
    })),
  };
};

IndicatorMap.Layout = Layout;
IndicatorMap.layoutProps = layoutProps;
export default IndicatorMap;
