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
  Drawer: <MapDrawer assessment={assessment} />,
});

const IndicatorMap = ({
  zoomIn,
  zoomOut,
  resetZoom,
  dimensions,
  assessment,
}) => (
  <MapControls
    links={{}}
    zoomIn={zoomIn}
    zoomOut={zoomOut}
    resetZoom={resetZoom}
    dimensions={dimensions}
    assessment={assessment}
  />
);

import {
  findIndicatorBySlug,
  getRegionsWithAssessment,
  loadData,
  getIndicators,
  getLnobDimensions,
} from "@sdgindex/data";
import { getValue } from "@sdgindex/data/observations";

// This function gets called at build time
export async function getStaticPaths() {
  await loadData();

  // Get the paths we want to pre-render based on regions
  const indicators = getIndicators();
  const paths = indicators.map(({ slug }) => ({
    params: { slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  await loadData();

  const assessmentSlug = slug;

  const assessment = findIndicatorBySlug(assessmentSlug.toLowerCase());
  const dimensions = getLnobDimensions();

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
    source: assessment.source,
    reference: assessment.reference,
    type: assessment.type,
  };

  const departments = getRegionsWithAssessment(assessment);

  departments.forEach((department) => {
    department.value = getValue(department);
  });

  return {
    props: {
      dimensions: dimensions.map((dimension) => ({
        id: dimension.id,
        number: dimension.number,
        category: dimension.category,
        type: dimension.type,
      })),
      assessment: assessmentProps,
      departments: departments.map((department) => ({
        id: department.id,
        name: department.name,
        value: department.value,
        type: department.type,
      })),
    },
  };
}

IndicatorMap.Layout = Layout;
IndicatorMap.layoutProps = layoutProps;
export default IndicatorMap;
