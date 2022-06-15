import MapLayout from "layouts/MapLayout";
//import MapDrawer from "drawers/MapDrawer";
import MapControls from "components/MapControls";
import { getCountryFill } from "helpers/legendForScore";
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
  countries: departments.map((department) => ({
    fill: getCountryFill(department),
    ...department,
  })),
  getTooltipText: getTooltipTextForScore,
  Drawer: null,
});

import {
  loadData,
  findAssessmentById,
  getRegionsWithAssessment,
} from "@sdgindex/data";
import { getScore, getScoreAsText } from "@sdgindex/data/observations";

Map.getInitialProps = async () => {
  await loadData();

  // Get data
  const dimension = findAssessmentById("LNOB1");
  const departments = getRegionsWithAssessment(dimension);

  return {
    dimension: {
      //id: overall.id,
      label: dimension.label,
      //description: overall.description,
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
