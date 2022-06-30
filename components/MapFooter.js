import { Box, Typography, Link } from "@mui/material";
import MapAlertDialog from "components/MapAlertDialog";

const MapFooter = () => (
  <Box display="flex" justifyContent="flex-end">
    <Typography
      variant="caption"
      sx={{
        paddingX: "4px",
        paddingY: "2px",
        bgcolor: "rgba(250, 250, 250, 0.7)",
      }}
    >
      <Link
        underline="hover"
        href="https://unsdsn.org/"
        target="_blank"
        rel="noreferrer"
      >
        Sustainable Development Solutions Network
      </Link>{" "}
      &middot; <MapAlertDialog />
    </Typography>
  </Box>
);

export default MapFooter;
