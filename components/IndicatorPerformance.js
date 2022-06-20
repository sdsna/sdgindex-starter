import { Box, Typography } from "@mui/material";
import DrawerSection from "components/DrawerSection";
// import RatingIndicator from "components/RatingIndicator";
import ValueIcon from "components/ValueIcon";
import YearIcon from "components/YearIcon";
import {
  //getRating,
  getValueAsText,
  getYearAsText,
  isImputed,
} from "@sdgindex/data/observations";
//import { getRatingLabel } from "helpers/ratings";

const IconLabel = (props) => (
  <Typography marginLeft={1} variant="body2" {...props} />
);

const Row = (props) => (
  <Box
    marginY={0.5}
    display="flex"
    alignItems="center"
    sx={{
      [":first-of-type"]: {
        marginTop: 0,
      },
      [":last-of-type"]: {
        marginBottom: 0,
      },
    }}
    {...props}
  />
);

const SmallText = (props) => (
  <Typography
    variant="body2"
    component="span"
    color="textSecondary"
    fontSize="0.7em"
    {...props}
  />
);

const IndicatorPerformance = ({
  indicator,
  value = true,
  year = true,
  ...otherProps
}) => (
  <DrawerSection {...otherProps}>
    {/* <Row>
      <RatingIndicator rating={getRating(indicator)} />
      <IconLabel>{getRatingLabel(getRating(indicator))}</IconLabel>
    </Row> */}
    {value ? (
      <Row>
        <ValueIcon />
        <IconLabel>
          {getValueAsText(indicator)}
          {isImputed(indicator) ? <SmallText> (imputed)</SmallText> : null}
        </IconLabel>
      </Row>
    ) : null}
    {year ? (
      <Row>
        <YearIcon />
        <IconLabel>{getYearAsText(indicator)}</IconLabel>
      </Row>
    ) : null}
  </DrawerSection>
);

export default IndicatorPerformance;
