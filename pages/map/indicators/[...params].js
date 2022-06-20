import MapLayout from "layouts/MapLayout";
import MapDrawer from "drawers/MapDrawer";
import MapControls from "components/MapControls";
import { isRelevantIndicatorForRegion } from "@sdgindex/data/assessments";
import { getValueColor, valueToScore } from "helpers/scores";
import { getTimeseriesValue, hasTimeseries } from "@sdgindex/data/timeseries";

const getValueForYear = (country, year) => {
  if (year === "latest") return country.value;
  if (!hasTimeseries(country)) return null;
  return getTimeseriesValue(country, year);
};

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
  getDepartmentFill: (department, year) => {
    const value = getValueForYear(department, year);
    return getValueColor(
      valueToScore(value, assessment.longTermObjective, assessment.lowerBound)
    );
  },
  getTooltipText: (department, year) =>
    formatNumberAsText(getValueForYear(department, year)),
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
import { getRating, getValue } from "@sdgindex/data/observations";

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

  const departments = getRegionsWithAssessment(assessment).filter(
    (department) => isRelevantIndicatorForRegion(assessment, department)
  );

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
      rating: getRating(department),
      value: department.value,
      region: department.region,
      type: department.type,
    })),
  };
};

IndicatorMap.Layout = Layout;
IndicatorMap.layoutProps = layoutProps;
export default IndicatorMap;
