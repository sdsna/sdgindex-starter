import { getGoals, getIndicators, loadData } from "@sdgindex/data";

beforeAll(async () => {
  await loadData();
});

it("contains 4 dimensions", () => {
  expect(getGoals()).toHaveLength(4);
});

it("has label for each goal", () => {
  getGoals().map((goal) => {
    expect(goal).toMatchObject({
      // description: expect.any(String),
      label: expect.any(String),
    });
  });
});

it("contains 37 indicators", () => {
  expect(getIndicators()).toHaveLength(37);
});

it("has a long term objective reason, description, ... for indicators", () => {
  getIndicators().map((indicator) => {
    expect(indicator).toMatchObject({
      longTermObjectiveReason: expect.any(String),
      // description: expect.any(String),
      reference: expect.any(String),
      longTermObjective: expect.any(Number),
      lowerBound: expect.any(Number),
    });
  });
});
