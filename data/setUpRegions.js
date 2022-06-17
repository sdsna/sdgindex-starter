const { SOURCE_FILE_PATH, DATA_SHEET } = require("./config");
const { excelToJson, addRegion } = require("@sdgindex/data/parse");

const setUpRegions = () => {
  // to JSON
  const dataRows = excelToJson({
    file: SOURCE_FILE_PATH,
    sheet: DATA_SHEET,
  });

  // Extract countries
  const regions = dataRows
    // Keep countries only
    .filter((row) => row["id"].length <= 3)
    .map((row) =>
      addRegion({
        id: row.id,
        name: row["country"],
        population: row["pop_2021"],
        region: row["AfDB_region"],
        type: "country",
      })
    );

  return regions;
};

module.exports = setUpRegions;
