const { SOURCE_FILE_PATH, CODEBOOK_SHEET } = require("./config");
const {
  excelToJson,
  roundNumber,
  addOverallAssessment,
  addGoals,
  addIndicator,
} = require("@sdgindex/data/parse");
const { findIndicatorById } = require("@sdgindex/data");

const setUpAssessments = () => {
  addOverallAssessment();
  addGoals();

  /* Data conversion (XLSX -> JSON) */
  const codebook = excelToJson({
    file: SOURCE_FILE_PATH,
    sheet: CODEBOOK_SHEET,
  });

  /* Extract Indicators */
  codebook.forEach((row) => {
    addIndicator({
      id: row.indicator,
      goalNumber: row.sdg,
      labelWithUnit: row.label,
      longTermObjective: roundNumber(row["optimum"], 2),
      longTermObjectiveReason: row.bestjust,
      lowerBound: roundNumber(row["lower_bound"], 2),
      referenceYear: row.Reference_Year,
      reference: row.Source.trim(),
      hasTrend: row.trend === "yes",
      link: row.dwldlink.trim(),
      description: row.Description.trim(),
    });
  });

  // For specific indicators, timeseries are based on modeled data
  const modeledTimeseries = {
    sdg2_stunting: "sdg2_stunting",
    sdg2_wasting: "sdg2_wasting",
    sdg5_familypl: "sdg5_familypl",
  };

  // Set hasModeledTimeseries=true and add metadata about the modeled data to
  // those indicators.
  Object.entries(modeledTimeseries).forEach(
    ([indicatorId, modeledSeriesId]) => {
      const indicator = findIndicatorById(indicatorId);
      const modeledIndicator = codebook.find(
        (row) => row.indicator === modeledSeriesId
      );
      indicator.hasTrend = true;
      indicator.hasModeledTimeseries = true;
      indicator.modeledTimeseriesId = modeledIndicator.indicator;
      indicator.modeledTimeseriesLink = modeledIndicator.dwldlink.trim();
    }
  );
};

module.exports = setUpAssessments;
