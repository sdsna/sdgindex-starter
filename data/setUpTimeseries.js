const { SOURCE_FILE_PATH, TIMESERIES_SHEET } = require("./config");
const { excelToJson, addTimeseries } = require("@sdgindex/data/parse");
const { getRegions, getTrendIndicators } = require("@sdgindex/data");

// Some indicators' timeseries use a different ID because they are based on
// modeled data
const getTimeseriesId = (indicator) => {
  if (indicator.hasModeledTimeseries) return indicator.modeledTimeseriesId;

  return indicator.id;
};

const setUpTimeseries = () => {
  // to JSON
  const dataRows = excelToJson({
    file: SOURCE_FILE_PATH,
    sheet: TIMESERIES_SHEET,
  });
  // const goalDataRows = excelToJson({
  //   file: SOURCE_FILE_PATH,
  //   sheet: GOAL_TIMESERIES_SHEET,
  // });

  // Extract one timeseries for each region...
  getRegions().forEach((region) => {
    const dataForRegion = dataRows.filter((row) => row.id === region.id);
    // const goalDataForRegion = goalDataRows.filter(
    //   (row) => row.id === region.id
    // );

    // Sort by year, ascending
    dataForRegion.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    // goalDataForRegion.sort((a, b) => parseInt(a.year) - parseInt(b.year));

    // Add timeseries for overall score
    // NOTE: In the Excel file, all countries have timeseries for overall score.
    // Even those, that are not ranked/score in the Excel database. So we must
    // manually ignore those.
    // const overallScore = getScore(findOverallAssessmentForRegion(region));
    // if (overallScore != null) {
    //   addTimeseries({
    //     region,
    //     assessment: findOverallAssessment(),
    //     dataPoints: goalDataForRegion
    //       // NOTE: In the Excel file, countries also have data for 2022.
    //       // However, these 2022 scores are not necessarily equal to their
    //       // actual SDG Index scores due to a slightly different methodology.
    //       // So Grayson requested that we remove these 2022 scores from the
    //       // timeseries array.
    //       .filter((row) => row.year !== 2022)
    //       .map((row) => ({
    //         value: row["sdgi_s"],
    //         year: row["year"],
    //       })),
    //   });
    // }

    // ...and each indicator with trend
    getTrendIndicators().forEach((indicator) => {
      // Skip if we cannot show raw data for this indicator
      if (indicator.hideRawData) return;

      addTimeseries({
        region,
        assessment: indicator,
        dataPoints: dataForRegion.map((row) => ({
          value: row[getTimeseriesId(indicator)],
          year: row["year"],
        })),
      });
    });
  });
};

module.exports = setUpTimeseries;
