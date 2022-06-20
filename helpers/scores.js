import { scaleSequential } from "d3-scale";
import { interpolateYlGnBu } from "d3-scale-chromatic";
import { grey as gray } from "@mui/material/colors";

const DOMAIN = {
  minRange: 0,
  maxRange: 100,
};

// Implementation of d3-scale
const color = scaleSequential()
  .domain([DOMAIN.minRange, DOMAIN.maxRange])
  .interpolator(interpolateYlGnBu)
  .clamp(true);

// Return the color for the value converted into an RGB string (e.g. "rgb(255,255,255))
// The color scale returned are reversed
export const getValueColor = (value) =>
  value != null ? color(100 - value) : gray[400];

// Convert raw value into score (0-100)
export const valueToScore = (value, longTermObjective, lowerBound) => {
  if (value == null) return null;
  return ((value - lowerBound) / (longTermObjective - lowerBound)) * 100;
};

// Convert score (0-100) into raw value
export const scoreToValue = (score, longTermObjective, lowerBound) => {
  if (score == null) return null;
  return (score / 100) * (longTermObjective - lowerBound) + lowerBound;
};
