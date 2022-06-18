import {
  findIndicatorById,
  findOverallAssessment,
  getGoals,
  getIndicators,
  loadData,
} from "@sdgindex/data";

beforeAll(async () => {
  await loadData();
});

it("has description and slug for overall assessment", () => {
  expect(findOverallAssessment()).toMatchObject({
    description: expect.any(String),
    label: expect.any(String),
  });
});

it("contains 17 goals", () => {
  expect(getGoals()).toHaveLength(17);
});

it("has description and label for each goal", () => {
  getGoals().map((goal) => {
    expect(goal).toMatchObject({
      description: expect.any(String),
      label: expect.any(String),
    });
  });
});

it("contains 91 indicators", () => {
  expect(getIndicators()).toHaveLength(91);
});

it("has a long term objective reason, description, ... for indicators", () => {
  getIndicators().map((indicator) => {
    expect(indicator).toMatchObject({
      longTermObjectiveReason: expect.any(String),
      description: expect.any(String),
      reference: expect.any(String),
      longTermObjective: expect.any(Number),
      lowerBound: expect.any(Number),
    });
  });
});

test("If assessments file contains SDG14_cleanwat", () => {
  expect(findIndicatorById("sdg14_cleanwat")).toMatchObject({
    description:
      "The clean waters subgoal of the Ocean Health Index measures to what degree marine waters under national jurisdictions have been contaminated by chemicals, excessive nutrients (eutrophication), human pathogens, and trash.",
    longTermObjectiveReason: "Technical Optimum",
    label: "Indice de santé des océans : Score des eaux propres",
    goalNumber: 14,
    unit: "pire 0-100 meilleur",
    longTermObjective: 100,
    lowerBound: 28.6,
  });
});
