import { Typography } from "@mui/material";

const GoalHeading = ({ goal }) => (
  <>
    <Typography variant="overline" color="textSecondary">
      SDG {goal.number}
    </Typography>
    <Typography fontWeight={500} variant="h4">
      {goal.label}
    </Typography>
  </>
);

export default GoalHeading;
