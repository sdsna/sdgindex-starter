export const LEGEND = [
  {
    color: "#0e4f95",
    threshold: 70,
    label: "> 70",
  },
  {
    color: "#0092d3",
    threshold: 60,
    label: "60 - 70",
  },
  {
    color: "#00A8FF",
    threshold: 50,
    label: "50 - 60",
  },
  {
    color: "#84d9f8",
    threshold: 40,
    label: "40 - 50",
  },
  {
    color: "#b0dff8",
    threshold: 30,
    label: "30 - 40",
  },
  {
    color: "#dff1fd",
    threshold: 0,
    label: "< 30",
  },
  {
    color: "#d8d8d8",
    fallback: true,
    label: "Information indisponible",
  },
];

export const getDepartmentFill = (department) => {
  const { score } = department;

  if (score == null) return LEGEND.find((item) => item.fallback).color;

  return LEGEND.find((item) => score >= item.threshold).color;
};

// export const LEGEND = [
//   {
//     color: "#0D52BD",
//     threshold: 60,
//     label: "> 60",
//   },
//   {
//     color: "#0178c8",
//     threshold: 50,
//     label: "50 - 60",
//   },
//   {
//     color: "#7fbae4",
//     threshold: 40,
//     label: "40 - 50",
//   },
//   {
//     color: "#84d9f8",
//     threshold: 30,
//     label: "30 - 40",
//   },
//   {
//     color: "#beddf0",
//     threshold: 0,
//     label: "< 30",
//   },
//   {
//     color: "#d8d8d8",
//     fallback: true,
//     label: "Information unavailable",
//   },
// ];
