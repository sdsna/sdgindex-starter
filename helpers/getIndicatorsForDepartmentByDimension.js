import { getIndicatorsByDimension } from "helpers/getIndicatorsByDimension";
import { findObservationByRegionAndAssessment } from "@sdgindex/data";

export const getIndicatorsForDepartmentByDimension = (department, dimension) =>
  getIndicatorsByDimension(dimension).map((indicator) => ({
    ...findObservationByRegionAndAssessment(department, indicator),
    ...indicator,
  }));
