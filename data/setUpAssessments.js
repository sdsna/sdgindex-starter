const { SOURCE_FILE_PATH, CODEBOOK_SHEET } = require("./config");
const {
  addLnobDimensions,
  addIndicator,
  excelToJson,
  roundNumber,
} = require("@sdgindex/data/parse");

const setUpAssessments = () => {
  addLnobDimensions();

  // Format category name
  const LNOBS = {
    services: "LNOB1",
    pauvreté: "LNOB2",
    genre: "LNOB3",
    revenus: "LNOB4",
  };

  /* Data conversion (XLSX -> JSON) */
  const codebook = excelToJson({
    file: SOURCE_FILE_PATH,
    sheet: CODEBOOK_SHEET,
  });

  /* Extract Indicators */
  codebook.forEach((row) => {
    addIndicator({
      id: row.IndCode,
      goalNumber: LNOBS[row.cat_lnob],
      // NOTE: description is missing in the excel file
      description: row.Description,
      labelWithUnit: row["Indicateur"].trim(),
      longTermObjective: roundNumber(row["Valeur Cible"], 2),
      longTermObjectiveReason: row["bestjust_FR"].trim(),
      lowerBound: roundNumber(row["Limite inferieure"], 2),
      lowerBoundReason: row["worstjust"].trim(),
      year: row["Reference_Year"],
      source: row.Source.trim(),
      // NOTE: we are missing reference in the excel file
      reference: row["Reference"],
    });
  });
};

module.exports = setUpAssessments;
