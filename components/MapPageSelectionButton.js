import { useRouter } from "next/router";
import PageSelectionButton from "components/PageSelectionButton";
import { isGoal, isIndicator } from "@sdgindex/data/assessments";
import { getGoals as getDimensions, useDataStore } from "@sdgindex/data";
import { mapAssessmentUrl } from "helpers/routing";
import { getIndicatorsByDimension } from "helpers/getIndicatorsByDimension";

const getOptionLabel = (assessment) =>
  isGoal(assessment)
    ? `Dimension ${assessment.number}: ${assessment.label}`
    : assessment.label;

const getOptionGroup = (assessment) => {
  if (isGoal(assessment)) return `Dimension ${assessment.category}`;

  if (isIndicator(assessment)) return `Dimension ${assessment.goalNumber}`;
};

const MapPageSelectionButton = ({ children }) => {
  const router = useRouter();
  const { isLoaded } = useDataStore();

  const options = [];

  if (isLoaded) {
    getDimensions().map((dimension) =>
      options.push(dimension, ...getIndicatorsByDimension(dimension))
    );
  }

  return (
    <PageSelectionButton
      loading={options.length == 0}
      options={options}
      getOptionLabel={getOptionLabel}
      getOptionGroup={getOptionGroup}
      modalTitle="Sélectionner une dimension ou un indicateur"
      modalDescription="Sélectionnez la dimension ou l'indicateur à afficher sur la carte."
      onSelect={(assessment) => {
        router.push(mapAssessmentUrl({ assessment }));
      }}
    >
      {children}
    </PageSelectionButton>
  );
};

export default MapPageSelectionButton;
