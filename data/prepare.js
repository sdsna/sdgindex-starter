const { writeStoreToJson } = require("@sdgindex/data/parse");
const setUpAssessments = require("./setUpAssessments");
const setUpRegions = require("./setUpRegions");
const setUpObservations = require("./setUpObservations");

// Get data from source Excel files
setUpAssessments();
setUpRegions();
setUpObservations();

// Write data
writeStoreToJson();
