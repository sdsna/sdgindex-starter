import { createElement } from "react";
import { getTrendColor, getTrendIcon } from "helpers/trends";

const TrendIndicator = ({ trend, ...otherProps }) =>
  createElement(getTrendIcon(trend), {
    htmlColor: getTrendColor(trend),
    ...otherProps,
  });

export default TrendIndicator;
