export const LEGEND = [
  {
    color: "#0D52BD",
    threshold: 65,
    label: "> 65",
  },
  {
    color: "#0178c8",
    threshold: 50,
    label: "50 - 65",
  },
  {
    color: "#7fbae4",
    threshold: 40,
    label: "40 - 50",
  },
  {
    color: "#84d9f8",
    threshold: 30,
    label: "30 - 40",
  },
  {
    color: "#dbeef6",
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
