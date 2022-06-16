import { useRouter } from "next/router";
import PageSelectionButton from "components/PageSelectionButton";
import {
  isOverallAssessment,
  isGoal,
  isIndicator,
  isSpilloverAssessment,
} from "@sdgindex/data/assessments";
import {
  findOverallAssessment,
  getGoals,
  getIndicatorsByGoal,
  findSpilloverAssessment,
  useDataStore,
} from "@sdgindex/data";
import { mapAssessmentUrl } from "helpers/routing";

const getOptionLabel = (assessment) =>
  isGoal(assessment)
    ? `SDG ${assessment.number}: ${assessment.label}`
    : assessment.label;

const getOptionGroup = (assessment) => {
  if (isOverallAssessment(assessment) || isSpilloverAssessment(assessment))
    return "Overall";

  if (isGoal(assessment)) return `SDG ${assessment.number}`;

  if (isIndicator(assessment)) return `SDG ${assessment.goalNumber}`;
};

const MapPageSelectionButton = ({ children }) => {
  const router = useRouter();
  const { isLoaded } = useDataStore();

  const options = [];

  if (isLoaded) {
    options.push(findOverallAssessment());
    options.push(findSpilloverAssessment());
    getGoals().map((goal) =>
      options.push(
        goal,
        ...getIndicatorsByGoal(goal).filter((indicator) => !indicator.hideMap)
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
