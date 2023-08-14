import { getLnobDimensions, getIndicators, loadData } from "@sdgindex/data";

beforeAll(async () => {
  await loadData();
});

it("contains 4 dimensions", () => {
  expect(getLnobDimensions()).toHaveLength(4);
});

it("has label for each goal", () => {
  getLnobDimensions().map((goal) => {
    expect(goal).toMatchObject({
      description: expect.any(String),
      label: expect.any(String),
    });
  });
});

it("contains 45 indicators", () => {
  expect(getIndicators()).toHaveLength(45);
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
