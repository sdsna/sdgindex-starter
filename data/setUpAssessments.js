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
    goal.description = `Les ODD sont guidés par le principe de "ne laisser personne de côté" (LNOB). L'indice "Leave-No-One-Behind" suit les inégalités selon quatre dimensions : la pauvreté, les services, le sexe et le revenu. Un score plus élevé signifie que moins de groupes de population sont laissés pour compte.`;
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
      description: row.Description,
      labelWithUnit: row["Indicateur"].trim(),
      longTermObjective: roundNumber(row["Valeur Cible"], 2),
      longTermObjectiveReason: row["bestjust"].trim(),
      lowerBound: roundNumber(row["Limite inferieure"], 2),
      lowerBoundReason: row["worstjust"].trim(),
      year: row["Reference_Year"],
      reference: row.Source.trim(),
    });
  });
};

module.exports = setUpAssessments;
