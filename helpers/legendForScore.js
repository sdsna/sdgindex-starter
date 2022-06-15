export const LEGEND = [
  {
    color: "#36869a",
    threshold: 80,
    label: "> 80",
  },
  {
    color: "#4facc5",
    threshold: 70,
    label: "70 - 80",
  },
  {
    color: "#94cddb",
    threshold: 60,
    label: "60 - 70",
  },
  {
    color: "#b7dde7",
    threshold: 50,
    label: "50 - 60",
  },
  {
    color: "#dbeef6",
    threshold: 0,
    label: "< 50",
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
