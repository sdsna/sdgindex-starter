import { Box, Typography } from "@mui/material";
import DrawerSection from "components/DrawerSection";
import ValueIcon from "components/ValueIcon";
import YearIcon from "components/YearIcon";
import {
  getValueAsText,
  getYearAsText,
  isImputed,
} from "@sdgindex/data/observations";

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
