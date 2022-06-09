const { SOURCE_FILE_PATH, DATA_SHEET } = require("./config");
const {
  excelToJson,
  addObservation,
  roundNumber,
} = require("@sdgindex/data/parse");
const { getRegions, getGoals, getIndicators } = require("@sdgindex/data");

const setUpObservations = () => {
  /* Data conversion (XLSX -> JSON) */
  const dataRows = excelToJson({
    file: SOURCE_FILE_PATH,
    sheet: DATA_SHEET,
  });

  // Extract one observation for each state and each assessment
  getRegions().forEach((region) => {
    const dataForRegion = dataRows.find((row) => row.id === region.id);

    // Dimensions
    getGoals().forEach((goal) =>
      addObservation({
        region,
        assessment: goal,
        score: roundNumber(dataForRegion[`${goal.category} Score`], 2),
      })
    );

    //Indicators
    getIndicators().forEach((indicator) => {
      let key = Object.keys(dataForRegion).find((property) =>
        property.startsWith(`${indicator.id}:`)
      );
      const observation = {
        value: dataForRegion[key],
        rating: dataForRegion[`Couleur: ${indicator.id} `],
        year: indicator.year,
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
