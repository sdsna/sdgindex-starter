import { observer } from "mobx-react-lite";
import { Divider } from "@mui/material";
//import MapCountryDrawer from "drawers/MapCountryDrawer";
import MapAssessmentDrawer from "drawers/MapAssessmentDrawer";
//import AssessmentHeading from "components/AssessmentHeading";
import DimensionHeading from "components/DimensionHeading";
import IndicatorHeading from "components/IndicatorHeading";
import MapPageSelectionButton from "components/MapPageSelectionButton";
import { useUiStore } from "stores/uiStore";
import {
  isGoal,
  isIndicator,
  isRelevantIndicatorForRegion,
} from "@sdgindex/data/assessments";

const MapDrawer = observer((props) => {
  const uiStore = useUiStore();
  let country = uiStore.target;

  const { assessment } = props;

  // Unselect country if assessment is not relevant. For example, if switching
  // from a global indicator to an OECD indicator, we want to unselect the
  // current country if it is not an OECD country.
  if (country && !isRelevantIndicatorForRegion(assessment, country)) {
    country = null;
    uiStore.clearTarget();
  }

  return (
    <>
      <MapPageSelectionButton>
        {isGoal(assessment) && <DimensionHeading dimension={assessment} />}
        {isIndicator(assessment) && <IndicatorHeading indicator={assessment} />}
      </MapPageSelectionButton>
      <Divider />
      {/* {country ? (
        <MapCountryDrawer {...props} />
      ) : ( */}
      <MapAssessmentDrawer {...props} />
      {/* )} */}
    </>
  );
});

export default MapDrawer;
