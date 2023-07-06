import { Box, Typography } from "@mui/material";
import DrawerSection from "components/DrawerSection";
import RatingIndicator from "components/RatingIndicator";
import TrendIndicator from "components/TrendIndicator";
import ScoreIcon from "components/ScoreIcon";
import { getRating, getTrend } from "@sdgindex/data/observations";
import { getRatingLabel } from "helpers/ratings";
import { getTrendLabel } from "helpers/trends";

const IconLabel = (props) => (
  <Typography marginLeft={1} alignSelf="center" variant="body2" {...props} />
);

const DimensionPerformance = ({ goal, ...otherProps }) => (
  <DrawerSection {...otherProps}>
    <Box style={{ display: "flex" }}>
      <ScoreIcon />
      <IconLabel>{goal.score}</IconLabel>
    </Box>
    <Box marginBottom={0.5} style={{ display: "flex" }}>
      <RatingIndicator rating={getRating(goal)} />
      <IconLabel>{getRatingLabel(getRating(goal))}</IconLabel>
    </Box>
    <Box style={{ display: "flex" }}>
      <TrendIndicator trend={getTrend(goal)} />
      <IconLabel>{getTrendLabel(getTrend(goal))}</IconLabel>
    </Box>
  </DrawerSection>
);

export default DimensionPerformance;
