import { Box } from "@mui/material";
import DrawerText from "components/DrawerText";

const ColorBlock = ({ color, ...props }) => (
  <Box
    width="12px"
    minWidth="12px"
    maxWidth="12px"
    height="12px"
    minHeight="12px"
    maxHeight="12px"
    borderRadius="100%"
    bgcolor={color}
    {...props}
  />
);

const MapLegendItem = ({ color, label }) => (
  <Box display="flex" alignItems="center">
    <ColorBlock marginRight={1} color={color} />
    <DrawerText>{label}</DrawerText>
  </Box>
);

export default MapLegendItem;
