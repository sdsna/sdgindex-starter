import {
  findObservationByRegionAndAssessment,
  findRegionBySlug,
  findAssessmentById,
  getRegionsWithAssessment,
  getIndicators,
  loadData,
  store,
} from "@sdgindex/data";
import { getRating, getValue, getYear } from "@sdgindex/data/observations";

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
    year: getYear(observation),
  };
};

// LNOB DIMENSION SCORES
it("has correct SDG index score and rank for Alibori", () => {
  expect(findObservation("alibori", "LNOB1")).toMatchObject({
    score: 18.95,
  });
});

it("has correct SDG index score and rank for Atlantique", () => {
  expect(findObservation("atlantique", "LNOB3")).toMatchObject({
    score: 58.31,
  });
});

it("has correct SDG index score and rank for Mono", () => {
  expect(findObservation("mono", "LNOB4")).toMatchObject({
    score: 49.24,
  });
});

it("has correct SDG index score and rank for Couffo", () => {
  expect(findObservation("couffo", "LNOB2")).toMatchObject({
    score: 28.43,
  });
});

it("has correct SDG index score and rank for Zou", () => {
  expect(findObservation("zou", "LNOB3")).toMatchObject({
    score: 52.27,
  });
});

it("has correct SDG index score and rank for Plateau", () => {
  expect(findObservation("plateau", "LNOB4")).toMatchObject({
    score: 39.81,
  });
});

// INDICATORS

it("has correct indicator data for Ouémé", () => {
  expect(findObservation("oueme", "lnb1_accouch")).toMatchObject({
    value: 98.7,
    rating: "green",
  });
  expect(findObservation("oueme", "lnb1_eau")).toMatchObject({
    value: 81.8,
    rating: "yellow",
  });
  expect(findObservation("oueme", "lnb3_scolamparit")).toMatchObject({
    value: 0.47,
    rating: "red",
  });
});

it("has correct indicator data for the Donga", () => {
  expect(findObservation("donga", "lnb3_mariage")).toMatchObject({
    value: 24.2,
    rating: "orange",
  });
  expect(findObservation("donga", "lnb4_gini")).toMatchObject({
    value: 0.32,
    rating: "yellow",
  });
  expect(findObservation("donga", "lnb2_malnutri")).toMatchObject({
    value: 3.6,
    rating: "green",
  });
});

it("has correct indicator data for the Collines", () => {
  expect(findObservation("collines", "lnb3_intparit")).toMatchObject({
    value: 0.13,
    rating: "red",
  });
  expect(findObservation("collines", "lnb4_revmoy")).toMatchObject({
    value: 39.6,
    rating: "red",
  });
  expect(findObservation("collines", "lnb3_povparit")).toMatchObject({
    value: 0.96,
    rating: "green",
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
  expect(Object.keys(store.observations)).toHaveLength(12 * (37 + 4));
  // 12 = number of regions
  // 37 = number of indicators
  // 4 = lnob dimensions
});
