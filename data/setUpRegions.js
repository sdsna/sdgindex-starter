const { SOURCE_FILE_PATH, DATA_SHEET } = require("./config");
const { excelToJson, addRegion } = require("@sdgindex/data/parse");

const setUpRegions = () => {
  /* Data conversion (XLSX -> JSON) */
  const dataRows = excelToJson({
    file: SOURCE_FILE_PATH,
    sheet: DATA_SHEET,
  });

  // Extract states
  dataRows.map((row) =>
    addRegion({
      id: row.id,
      name: row.id,
      type: "department",
    })
  );
};

module.exports = setUpRegions;
