import { Typography } from "@mui/material";

const DimensionHeading = ({ dimension }) => (
  <>
    <Typography variant="overline" color="textSecondary">
      Dimension {dimension.category}
    </Typography>
    <Typography fontWeight={500} variant="h4">
      {dimension.label}
    </Typography>
  </>
);

export default DimensionHeading;
