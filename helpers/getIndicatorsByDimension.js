import { getIndicators } from "@sdgindex/data";

export const getIndicatorsByDimension = (dimension) =>
  getIndicators().filter(
    (indicator) => indicator.goalNumber === dimension.category
  );
