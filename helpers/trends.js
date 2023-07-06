import {
  ArrowUpThick,
  ArrowTopRightThick,
  ArrowRightThick,
  ArrowDownThick,
} from "mdi-material-ui";
import TrendNotAvailableIcon from "components/TrendNotAvailableIcon";
import { getRatingColor } from "helpers/ratings";

const NO_TREND = "•";

const TRENDS = [
  {
    arrow: "↑",
    color: "green",
    icon: ArrowUpThick,
    label: "En bonne voie ou maintien de la réalisation de l'ODD",
    shortLabel: "En bonne voie ou maintien de la réalisation de l'ODD",
  },
  {
    arrow: "➚",
    color: "yellow",
    icon: ArrowTopRightThick,
    label: "En amélioration modérée",
    shortLabel: "Amélioration modérée",
  },
  {
    arrow: "→",
    color: "orange",
    icon: ArrowRightThick,
    label: "En stagnation",
    shortLabel: "Stagnation",
  },
  {
    arrow: "↓",
    color: "red",
    icon: ArrowDownThick,
    label: "Décroissant",
    shortLabel: "Décroissant",
  },
  {
    arrow: NO_TREND,
    color: "gray",
    icon: TrendNotAvailableIcon,
    label: "Information sur les tendances indisponible",
    shortLabel: "Information sur les tendances indisponible",
  },
];

// return list of valid trend arrows
export const getTrends = () => TRENDS.map((trend) => trend.arrow);

// helper for finding a trend by its arrow
export const findTrendByArrow = (arrow) =>
  TRENDS.find((trend) => trend.arrow === arrow);

// Return the color for the trend (e.g. arrow-up)
export const getTrendColor = (arrow) =>
  getRatingColor(findTrendByArrow(arrow).color);

// Return the icon for the trend
export const getTrendIcon = (arrow) => findTrendByArrow(arrow).icon;

// Return the label for the trend
export const getTrendLabel = (arrow) => findTrendByArrow(arrow).label;

// Return the short label for the trend
export const getTrendShortLabel = (arrow) => findTrendByArrow(arrow).shortLabel;
