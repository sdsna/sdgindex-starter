import { SvgIcon } from "@mui/material";
import ScoreSvg from "static/performance/score.svg";

const ScoreIcon = (props) => (
  <SvgIcon aria-label="Score" component={ScoreSvg} {...props} />
);

export default ScoreIcon;
