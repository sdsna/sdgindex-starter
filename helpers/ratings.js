import { green, orange, red, grey as gray } from "@mui/material/colors";

const RATINGS = [
  {
    name: "green",
    label: "ODD atteint",
    main: green[600],
  },
  {
    name: "yellow",
    label: "Des défis à relever",
    main: "#fcc30b",
  },
  {
    name: "orange",
    label: "Des défis importants restent à relever",
    main: orange[700],
  },
  {
    name: "red",
    label: "Des défis majeurs subsistent",
    main: red[700],
  },
  {
    name: "gray",
    label: "Information indisponible",
    main: gray[400],
  },
];

// return the list of valid ratings
export const getRatings = () => RATINGS.map((rating) => rating.name);

// helper for finding a rating by name
export const findRatingByName = (name) =>
  RATINGS.find((rating) => rating.name === name);

// helper for getting label by rating color
export const getRatingLabel = (rating) => findRatingByName(rating).label;

// Return the color for the rating (e.g. "green")
export const getRatingColor = (rating) => findRatingByName(rating).main;
