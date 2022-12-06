import MapLayout from "layouts/MapLayout";
import MapDrawer from "drawers/MapDrawer";
import MapControls from "components/MapControls";
import { getDepartmentFill, LEGEND } from "helpers/legendForScore";
import { getTooltipTextForScore } from "helpers/getTooltipTextForScore";

const Map = ({ zoomIn, zoomOut, resetZoom, dimensions, dimension }) => (
  <MapControls
    links={{}}
    zoomIn={zoomIn}
    zoomOut={zoomOut}
    resetZoom={resetZoom}
    dimensions={dimensions}
    assessment={dimension}
    legend={LEGEND}
  />
);

Map.Layout = MapLayout;
Map.layoutProps = ({ dimension, dimensions, departments }) => ({
  assessment: dimension,
  dimensions: dimension.dimensions,
  departments: departments.map((department) => ({
    fill: getDepartmentFill(department),
    ...department,
  })),
  getTooltipText: getTooltipTextForScore,
  Drawer: (
    <MapDrawer
      assessment={dimension}
      dimensions={dimensions}
      dimension="score"
      legend={LEGEND}
    />
  ),
});

import {
  loadData,
  findAssessmentById,
  getGoals as getDimensions,
  getRegionsWithAssessment,
} from "@sdgindex/data";
import { getScore, getScoreAsText } from "@sdgindex/data/observations";
import { getIndicatorsByDimension } from "helpers/getIndicatorsByDimension";

Map.getInitialProps = async ({ query }) => {
  await loadData();

  const { slug } = query;
  const assessmentId = slug;

  // Get data
  const dimension = findAssessmentById(assessmentId.toUpperCase());
  const dimensions = getDimensions();
  const departments = getRegionsWithAssessment(dimension);

  return {
    dimension: {
      id: dimension.id,
      label: dimension.label,
      type: dimension.type,
      description: dimension.description,
      category: dimension.category,
      longTermObjective: dimension.longTermObjective,
      indicators: getIndicatorsByDimension(dimension).map((indicator) => ({
        id: indicator.id,
        slug: indicator.slug,
        label: indicator.label,
        type: indicator.type,
      })),
    },
    dimensions: dimensions.map((dimension) => ({
      id: dimension.id,
      number: dimension.number,
      category: dimension.category,
      type: dimension.type,
    })),
    departments: departments.map((department) => ({
      id: department.id,
      name: department.name,
      score: getScore(department),
      scoreAsText: getScoreAsText(department),
      type: department.type,
    })),
  };
};

export default Map;
