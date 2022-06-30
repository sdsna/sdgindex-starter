import { Box } from "@mui/material";
import { grey as gray } from "@mui/material/colors";
import MapLegend from "components/MapLegend";
import MapLegendItem from "components/MapLegendItem";
import { getValueColor, scoreToValue } from "helpers/scores";

const MapLegendValues = ({ longTermObjective, lowerBound }) => (
  <MapLegend>
    <Box>
      <MapLegendItem
        color={getValueColor(100)}
        label={
          <>
            {longTermObjective.toFixed(2)}{" "}
            <Box component="span" color="text.secondary" fontSize=".8em">
              (Objectif à long terme)
            </Box>
          </>
        }
      />
      {[75, 50, 25].map((score) => (
        <MapLegendItem
          key={score}
          color={getValueColor(score)}
          label={scoreToValue(score, longTermObjective, lowerBound).toFixed(2)}
        />
      ))}
      <MapLegendItem
        color={getValueColor(0)}
        label={
          <>
            {lowerBound.toFixed(2)}{" "}
            <Box component="span" color="text.secondary" fontSize=".8em">
              (limite inférieure)
            </Box>
          </>
        }
      />
      <MapLegendItem
        key="Information unavailable"
        color={gray[400]}
        label="Information indisponible"
      />
    </Box>
  </MapLegend>
);

export default MapLegendValues;
