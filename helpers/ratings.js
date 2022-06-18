import { green, orange, red, grey as gray } from "@mui/material/colors";

const RATINGS = [
  {
    name: "green",
    label: "SDG achieved",
    main: green[600],
  },
  {
    name: "yellow",
    label: "Challenges remain",
    main: "#fcc30b",
  },
  {
    name: "orange",
    label: "Significant challenges remain",
    main: orange[700],
  },
  {
    name: "red",
    label: "Major challenges remain",
    main: red[700],
  },
  {
    name: "gray",
    label: "Information unavailable",
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
