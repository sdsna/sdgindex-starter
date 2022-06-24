import MapLayout from "layouts/MapLayout";
import MapDrawer from "drawers/MapDrawer";
import MapControls from "components/MapControls";
import { getDepartmentFill, LEGEND } from "helpers/legendForScore";
import { getTooltipTextForScore } from "helpers/getTooltipTextForScore";

const Map = ({ zoomIn, zoomOut, resetZoom }) => (
  <MapControls
    links={{}}
    zoomIn={zoomIn}
    zoomOut={zoomOut}
    resetZoom={resetZoom}
  />
);

Map.Layout = MapLayout;
Map.layoutProps = ({ dimension, departments }) => ({
  assessment: dimension,
  dimensions: dimension.dimensions,
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
  loadData,
  findAssessmentById,
  getGoals as getDimensions,
  getRegionsWithAssessment,
} from "@sdgindex/data";
import { getScore, getScoreAsText } from "@sdgindex/data/observations";
import { getIndicatorsByDimension } from "helpers/getIndicatorsByDimension";

Map.getInitialProps = async () => {
  await loadData();

  // Get data
  const dimension = findAssessmentById("LNOB1");
  const dimensions = getDimensions();
  const departments = getRegionsWithAssessment(dimension);

  return {
    dimension: {
      id: dimension.id,
      label: dimension.label,
      type: dimension.type,
      description: dimension.description,
      category: dimension.category,
      dimensions: dimensions.map((dimension) => ({
        id: dimension.id,
        number: dimension.number,
      })),
      indicators: getIndicatorsByDimension(dimension).map((indicator) => ({
        id: indicator.id,
        slug: indicator.slug,
        label: indicator.label,
        type: indicator.type,
      })),
    },
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
