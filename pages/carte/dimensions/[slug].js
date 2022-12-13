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

export async function getStaticPaths() {
  await loadData();

  // Get the paths we want to pre-render based on regions
  const dimensions = getDimensions();
  const paths = dimensions.map(({ id }) => ({
    params: { slug: id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  await loadData();

  const assessmentId = slug;

  // Get data
  const dimension = findAssessmentById(assessmentId.toUpperCase());
  const dimensions = getDimensions();
  const departments = getRegionsWithAssessment(dimension);

  return {
    props: {
      dimension: {
        id: dimension.id,
        label: dimension.label,
        type: dimension.type,
        description: dimension.description,
        category: dimension.category,
        longTermObjective: dimension.longTermObjective || null,
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
    },
  };
}

export default Map;
