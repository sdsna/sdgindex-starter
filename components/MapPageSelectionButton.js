import { useRouter } from "next/router";
import PageSelectionButton from "components/PageSelectionButton";
import { isGoal, isIndicator } from "@sdgindex/data/assessments";
import { getGoals, useDataStore } from "@sdgindex/data";
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
    getGoals().map((goal) =>
      options.push(
        goal,
        ...getIndicatorsByDimension(goal).filter(
          (indicator) => !indicator.hideMap
        )
      )
    );
  }

  return (
    <PageSelectionButton
      loading={options.length == 0}
      options={options}
      getOptionLabel={getOptionLabel}
      getOptionGroup={getOptionGroup}
      modalTitle="Select a goal or indicator"
      modalDescription="Select the goal or indicator to display on the map."
      onSelect={(assessment) => {
        router.push(mapAssessmentUrl({ assessment }));
      }}
    >
      {children}
    </PageSelectionButton>
  );
};

export default MapPageSelectionButton;
