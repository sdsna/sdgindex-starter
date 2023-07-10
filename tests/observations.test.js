import {
  findObservationByRegionAndAssessment,
  findRegionBySlug,
  findAssessmentById,
  getRegionsWithAssessment,
  getIndicators,
  loadData,
  store,
} from "@sdgindex/data";
import {
  getRating,
  getTrend,
  getValue,
  getYear,
} from "@sdgindex/data/observations";

beforeAll(async () => {
  await loadData();
});

// Find an observation by region slug and assessment ID
const findObservation = (regionSlug, assessmentId) => {
  const observation = findObservationByRegionAndAssessment(
    findRegionBySlug(regionSlug),
    findAssessmentById(assessmentId)
  );

  return {
    ...observation,
    rating: getRating(observation),
    value: getValue(observation),
    trend: getTrend(observation),
    year: getYear(observation),
  };
};

// LNOB DIMENSION SCORES
it("has correct SDG index score, rating and trend for Alibori", () => {
  expect(findObservation("alibori", "LNOB1")).toMatchObject({
    score: 26.55,
    rating: "red",
    trend: "➚",
  });
});

it("has correct SDG index score, rating and trend for Atlantique", () => {
  expect(findObservation("atlantique", "LNOB3")).toMatchObject({
    score: 59.91,
    rating: "red",
    trend: "➚",
  });
});

it("has correct SDG index score, rating and trend for Mono", () => {
  expect(findObservation("mono", "LNOB4")).toMatchObject({
    score: 68.98,
    rating: "orange",
    trend: "•",
  });
});

it("has correct SDG index score, rating and trend for Couffo", () => {
  expect(findObservation("couffo", "LNOB2")).toMatchObject({
    score: 38.74,
    rating: "red",
    trend: "→",
  });
});

it("has correct SDG index score, rating and trend for Ouémé", () => {
  expect(findObservation("oueme", "LNOB4")).toMatchObject({
    score: 93.88,
    rating: "yellow",
    trend: "•",
  });
});

it("has correct SDG index score, rating and trend for Plateau", () => {
  expect(findObservation("plateau", "LNOB1")).toMatchObject({
    score: 35.25,
    rating: "red",
    trend: "→",
  });
});

// INDICATORS

it("has correct indicator data (value, rating, trend) for Ouémé", () => {
  expect(findObservation("oueme", "lnb1_accouch")).toMatchObject({
    value: 94.33,
    rating: "yellow",
    trend: "↑",
  });
  expect(findObservation("oueme", "lnb1_eau")).toMatchObject({
    value: 80.75,
    rating: "yellow",
    trend: "→",
  });
  expect(findObservation("oueme", "lnb3_scolamparit")).toMatchObject({
    value: 0.63,
    rating: "orange",
    trend: "↑",
  });
});

it("has correct indicator data (value, rating, trend) for the Donga", () => {
  expect(findObservation("donga", "lnb3_mariage")).toMatchObject({
    value: 32.77,
    rating: "orange",
    trend: "↓",
  });
  expect(findObservation("donga", "lnb4_gini")).toMatchObject({
    value: 0.32,
    rating: "yellow",
    trend: "•",
  });
  expect(findObservation("donga", "lnb2_malnutri")).toMatchObject({
    value: 11.7,
    rating: "orange",
    trend: "↓",
  });
});

it("has correct indicator data (value, rating, trend) for the Collines", () => {
  expect(findObservation("collines", "lnb3_intparit")).toMatchObject({
    value: 0.28,
    rating: "red",
    trend: "•",
  });
  expect(findObservation("collines", "lnb4_revmoy")).toMatchObject({
    value: 17.56,
    rating: "yellow",
    trend: "•",
  });
  expect(findObservation("collines", "lnb3_povparit")).toMatchObject({
    value: 0.96,
    rating: "green",
    trend: "•",
  });
});

/* Test That The Ratings Are Not Empty */
it("has valid ratings", () => {
  const ratings = getIndicators()
    .flatMap((assessment) => getRegionsWithAssessment(assessment))
    .map(getRating);

  ratings.map((rating) => expect(rating).toBeDefined());
});

/* Test The Total Number Of Extractions */
it("has the correct number of observations for custom/goals/indicators", () => {
  expect(Object.keys(store.observations)).toHaveLength(12 * (45 + 4));
  // 12 = number of regions
  // 45 = number of indicators
  // 4 = lnob dimensions
});
