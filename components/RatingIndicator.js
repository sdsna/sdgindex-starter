import { SvgIcon } from "@mui/material";
import NormalizedCircleSvg from "static/ratings/normalized-circle.svg";
import { getRatingColor } from "helpers/ratings";

const RatingIndicator = ({ rating, ...otherProps }) => (
  <SvgIcon
    component={NormalizedCircleSvg}
    htmlColor={getRatingColor(rating)}
    {...otherProps}
  />
);

export default RatingIndicator;
