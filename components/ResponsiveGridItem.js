import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import contentSizeQuery from "helpers/contentSizeQuery";

// If value is 0 to 1, assume that it is specifying the width of the item as
// a fraction of the row (e.g., two-thirds)
// If value is 1 or greater, assume that it is specifying the number of items
// that should fit in one row (e.g., three)
const toPercent = (value) => {
  // Width of the item...
  if (value < 1) {
    return value * 100;
  }

  // ...or, the number of items to fit on the row
  return 100 / value;
};

const ResponsiveGridItem = styled(Grid)(
  (props) =>
    contentSizeQuery("small", {
      maxWidth: `${toPercent(props.small)}%`,
      flexBasis: `${toPercent(props.small)}%`,
    }),
  (props) =>
    contentSizeQuery("medium", {
      maxWidth: `${toPercent(props.medium)}%`,
      flexBasis: `${toPercent(props.medium)}%`,
    }),
  (props) =>
    contentSizeQuery("large", {
      maxWidth: `${toPercent(props.large)}%`,
      flexBasis: `${toPercent(props.large)}%`,
    })
);
ResponsiveGridItem.defaultProps = { item: true };

export default ResponsiveGridItem;
