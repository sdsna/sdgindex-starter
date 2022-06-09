import { getRegions, loadData } from "@sdgindex/data";

beforeAll(async () => {
  await loadData();
});

it("contains 12 departments", () => {
  expect(getRegions()).toHaveLength(12);
});

it("contains some of the departments", () => {
  const getDepartmentById = (id) =>
    getRegions().find((department) => department.id === id);

  expect(getDepartmentById("Borgou")).toMatchObject({
    dataId: 4,
    slug: "borgou",
    name: "Borgou",
    type: "department",
  });
  expect(getDepartmentById("Plateau")).toMatchObject({
    dataId: 11,
    slug: "plateau",
    name: "Plateau",
    type: "department",
  });
});
