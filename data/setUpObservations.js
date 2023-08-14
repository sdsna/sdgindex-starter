const { SOURCE_FILE_PATH, DATA_SHEET } = require("./config");
const {
  excelToJson,
  addObservation,
  roundNumber,
} = require("@sdgindex/data/parse");
const {
  getRegions,
  getLnobDimensions,
  getIndicators,
} = require("@sdgindex/data");

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
    getLnobDimensions().forEach((lnob) =>
      addObservation({
        region,
        assessment: lnob,
        score: roundNumber(dataForRegion[`${lnob.category} Score`], 2),
        rating: dataForRegion[`Dashboard: ${lnob.category}`],
        trend: dataForRegion[`arrow_${lnob.category}`],
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
        trend: dataForRegion[`arrow_n_${indicator.id}`],
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
