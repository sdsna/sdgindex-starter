export const LEGEND = [
  {
    color: "#dbeef6",
    threshold: 60,
    label: "> 60",
  },
  {
    color: "#b7dde7",
    threshold: 50,
    label: "50 - 60",
  },
  {
    color: "#94cddb",
    threshold: 40,
    label: "40 - 50",
  },
  {
    color: "#4facc5",
    threshold: 30,
    label: "30 - 40",
  },
  {
    color: "#36869a",
    threshold: 0,
    label: "< 30",
  },
  {
    color: "#d8d8d8",
    fallback: true,
    label: "Information unavailable",
  },
];

export const getDepartmentFill = (department) => {
  const { score } = department;

  if (score == null) return LEGEND.find((item) => item.fallback).color;

  return LEGEND.find((item) => score >= item.threshold).color;
};
