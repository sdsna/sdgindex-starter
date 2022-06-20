import {
  findObservationByRegionAndAssessment,
  findRegionBySlug,
  findAssessmentById,
  getRegionsWithAssessment,
  getGoals,
  getIndicators,
  loadData,
  store,
} from "@sdgindex/data";
import {
  getRank,
  getRating,
  getTrend,
  getValue,
  getYear,
  isImputed,
} from "@sdgindex/data/observations";
import { isRelevantIndicatorForRegion } from "@sdgindex/data/assessments";
import { findRatingByName } from "helpers/ratings";
import { findTrendByArrow } from "helpers/trends";

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
    rank: getRank(observation),
    rating: getRating(observation),
    trend: getTrend(observation),
    value: getValue(observation),
    year: getYear(observation),
    isImputed: isImputed(observation),
  };
};

/* Global and Spillover Tests */
// Global score and rank
it("has correct SDG index score and rank for Bénin", () => {
  expect(findObservation("benin", "TOT")).toMatchObject({
    score: 50.66,
    rank: 10,
  });
});

it("has correct SDG index score and rank for Niger", () => {
  expect(findObservation("niger", "TOT")).toMatchObject({
    score: 49.73,
    rank: 13,
  });
});

it("has correct SDG index score and rank for Mali", () => {
  expect(findObservation("mali", "TOT")).toMatchObject({
    score: 53.88,
    rank: 7,
  });
});

it("has correct SDG index score and rank for Ghana", () => {
  expect(findObservation("ghana", "TOT")).toMatchObject({
    score: 62.43,
    rank: 1,
  });
});

/* SDGs Tests */
it("has correct SDG scores and trends for Senegal", () => {
  expect(findObservation("senegal", "SDG1")).toMatchObject({
    rating: "red",
    trend: "→",
  });
  expect(findObservation("senegal", "SDG2")).toMatchObject({
    rating: "orange",
    trend: "➚",
  });
  expect(findObservation("senegal", "SDG5")).toMatchObject({
    rating: "orange",
    trend: "→",
  });
});

it("has correct SDG scores and trends for Sierra Leone", () => {
  expect(findObservation("sierra-leone", "SDG6")).toMatchObject({
    rating: "red",
    trend: "→",
  });
  expect(findObservation("sierra-leone", "SDG8")).toMatchObject({
    rating: "orange",
    trend: "→",
  });
  expect(findObservation("sierra-leone", "SDG12")).toMatchObject({
    rating: "green",
    trend: "↑",
  });
});

/* Indicators Tests */
it("has correct indicator data for Togo", () => {
  expect(findObservation("togo", "sdg1_wpc")).toMatchObject({
    value: 44.36,
    rating: "red",
    trend: "→",
  });
  expect(findObservation("togo", "sdg1_320pov")).toMatchObject({
    value: 69.28,
    rating: "red",
    trend: "→",
  });
  expect(findObservation("togo", "sdg2_obesity")).toMatchObject({
    value: 8.4,
    rating: "green",
    trend: "↑",
  });
});

it("has correct indicator data for Liberia", () => {
  expect(findObservation("liberia", "sdg3_hiv")).toMatchObject({
    value: 0.29,
    rating: "yellow",
    trend: "↑",
  });
  expect(findObservation("liberia", "sdg6_water")).toMatchObject({
    value: 75.26,
    rating: "yellow",
    trend: "→",
  });
  expect(findObservation("liberia", "sdg6_sanita")).toMatchObject({
    value: 18.16,
    rating: "red",
    trend: "→",
  });
});

it("has correct indicator data for the Nigeria", () => {
  expect(findObservation("nigeria", "sdg12_nimport")).toMatchObject({
    value: 0.27,
    rating: "green",
    trend: "↑",
  });
  expect(findObservation("nigeria", "sdg13_co2gcp")).toMatchObject({
    value: 0.61,
    rating: "green",
    trend: "↑",
  });
  expect(findObservation("nigeria", "sdg14_cpma")).toMatchObject({
    value: 0,
    rating: "red",
    trend: "→",
  });
});

/* Test That The Ratings Are Not Empty */
it("has valid ratings", () => {
  const ratings = [...getGoals(), ...getIndicators()]
    .flatMap((assessment) =>
      getRegionsWithAssessment(assessment).filter((region) =>
        isRelevantIndicatorForRegion(assessment, region)
      )
    )
    .map(getRating)
    .map(findRatingByName);

  ratings.map((rating) => expect(rating).toBeDefined());
});

/* Test That The Trends Are Not Empty */
it("has valid trends", () => {
  const trends = [...getGoals(), ...getIndicators()]
    .flatMap((assessment) =>
      getRegionsWithAssessment(assessment).filter((region) =>
        isRelevantIndicatorForRegion(assessment, region)
      )
    )
    .map(getTrend)
    .map(findTrendByArrow);

  trends.map((trend) => expect(trend).toBeDefined());
});

/* Test The Total Number Of Extractions */
it("has the correct number of observations for custom/goals/indicators", () => {
  expect(Object.keys(store.observations)).toHaveLength(15 * 91 + (17 + 1) * 15);
  // 15 = number of regions
  // 91 = number of indicators
  // 17 + 1 = goals + TOT
});

describe("for indicators with modeled timeseries", () => {
  it("has the correct trend data", () => {
    expect(findObservation("gambie", "sdg2_stunting")).toMatchObject({
      value: 17.5,
      year: 2020,
      rating: "orange",
      trend: "→",
    });
    expect(findObservation("benin", "sdg2_wasting")).toMatchObject({
      value: 5,
      year: 2018,
      rating: "green",
      trend: "↑",
    });
    expect(findObservation("cote-d-ivoire", "sdg5_familypl")).toMatchObject({
      value: 43.5,
      year: 2018,
      rating: "red",
      trend: "→",
    });
  });

  describe("when rating is gray", () => {
    it("has no trend", () => {
      expect(findObservation("cabo-verde", "sdg2_wasting")).toMatchObject({
        rating: "gray",
        trend: "•",
        value: null,
        year: null,
      });
    });
  });
});
