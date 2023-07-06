const { SOURCE_FILE_PATH, CODEBOOK_SHEET } = require("./config");
const { LNOB_DIMENSIONS } = require("./source/LNOB_DIMENSIONS");
const {
  addGoals,
  addIndicator,
  excelToJson,
  roundNumber,
} = require("@sdgindex/data/parse");
const { getGoals } = require("@sdgindex/data");

const setUpAssessments = () => {
  addGoals({ except: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] });
  getGoals().forEach((goal) => {
    const dimension = LNOB_DIMENSIONS.find((lnob) => lnob.id === goal.number);

    goal.id = `LNOB${goal.number}`;
    goal.category = dimension.category;
    goal.dataId = `LNOB${goal.number}`;
    goal.slug = `category-${dimension.category}`;
    goal.label = dimension.label;
    goal.description = dimension.description;
  });

  /* Data conversion (XLSX -> JSON) */
  const codebook = excelToJson({
    file: SOURCE_FILE_PATH,
    sheet: CODEBOOK_SHEET,
  });

  /* Extract Indicators */
  codebook.forEach((row) => {
    addIndicator({
      id: row.IndCode,
      goalNumber: row.cat_lnob,
      // NOTE: description is missing in the excel file
      // As GSP transforms our data into JSON (and json doesn't accept undefined values),
      // we temporarily need to set missing description to "null" (decription pending)
      description: row.Description ? row.Description : null,
      labelWithUnit: row["Indicateur"].trim(),
      longTermObjective: roundNumber(row["Valeur Cible"], 2),
      longTermObjectiveReason: row["bestjust_FR"].trim(),
      lowerBound: roundNumber(row["Limite inferieure"], 2),
      lowerBoundReason: row["worstjust"].trim(),
      year: row["Reference_Year"],
      source: row.Source.trim(),
      // NOTE: we are missing reference in the excel file
      // As GSP transforms our data into JSON (and json doesn't accept undefined values),
      // we temporarily need to set missing description to "null" (decription pending)
      reference: row["Reference"] ? row["Reference"] : null,
    });
  });
};

module.exports = setUpAssessments;
