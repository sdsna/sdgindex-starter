const { SOURCE_FILE_PATH, DATA_SHEET } = require("./config");
const {
  excelToJson,
  addObservation,
  roundNumber,
} = require("@sdgindex/data/parse");
const {
  findOverallAssessment,
  getRegions,
  getGoals,
  getIndicators,
} = require("@sdgindex/data");

// Some indicators use modeled timeseries, so the trend data/ID is different
// than the indicator ID.
const getTrendId = (indicator) => {
  if (indicator.hasModeledTimeseries) return indicator.modeledTimeseriesId;

  return indicator.id;
};

const setUpObservations = () => {
  // to JSON
  const dataRows = excelToJson({
    file: SOURCE_FILE_PATH,
    sheet: DATA_SHEET,
  });

  // Extract one observation for each region and each assessment
  getRegions().forEach((region) => {
    const dataForRegion = dataRows.find((row) => row.id === region.id);

    // Overall
    addObservation({
      region,
      assessment: findOverallAssessment(),
      score: dataForRegion["sdgi_s"],
      rank: dataForRegion["sdgi_r"],
    });

    // Goals
    getGoals().forEach((goal) =>
      addObservation({
        region,
        assessment: goal,
        score: dataForRegion[`goal${goal.number}`],
        regionalScore: roundNumber(dataForRegion[`goal${goal.number}_reg`], 2),
        rating: dataForRegion[`dash_sdg${goal.number}`],
        trend: dataForRegion[`arrow_sdg${goal.number}`],
      })
    );

    getIndicators().forEach((indicator) => {
      const observation = {
        isImputed: dataForRegion[`impute_${indicator.id}`] != null,
        value: dataForRegion[`${indicator.id}`],
        rating: dataForRegion[`col_${indicator.id}`],
        trend: dataForRegion[`arrow_n_${getTrendId(indicator)}`],
        year: dataForRegion[`year_${indicator.id}`],
      };

      addObservation({
        region,
        assessment: indicator,
        ...observation,
      });
    });
  });
};

module.exports = setUpObservations;
