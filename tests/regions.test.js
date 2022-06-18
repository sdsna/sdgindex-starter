import {
  findRegionById,
  findRegionBySlug,
  getRegions,
  getRegionsByType,
  loadData,
} from "@sdgindex/data";

beforeAll(async () => {
  await loadData();
});

it("contains 15 countries", () => {
  expect(getRegions()).toHaveLength(15);
});

it("contains no country groups", () => {
  expect(getRegionsByType("group")).toHaveLength(0);
});

it("generates slug URL-safe slug for Guinée-Bissau (no accents)", () => {
  expect(findRegionById("GNB")).toHaveProperty("slug", "guinee-bissau");
});

it("assigns the full-length region", () => {
  expect(findRegionBySlug("ghana")).toHaveProperty("region", "West");
});
