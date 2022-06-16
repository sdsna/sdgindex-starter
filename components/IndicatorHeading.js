import { Typography } from "@mui/material";
import DrawerText from "components/DrawerText";

const IndicatorHeading = ({ indicator }) => (
  <>
    <Typography variant="overline" color="textSecondary">
      SDG {indicator.goalNumber} &middot; Indicator
    </Typography>
    <Typography variant="body1" fontWeight={500}>
      {indicator.label}
    </Typography>
    <DrawerText color="textSecondary">{indicator.unit}</DrawerText>
  </>
);

export default IndicatorHeading;
