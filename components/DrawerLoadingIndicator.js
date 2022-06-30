import { Box, CircularProgress } from "@mui/material";

const DrawerLoadingIndicator = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexGrow={1}
    padding={2}
  >
    <CircularProgress />
  </Box>
);

export default DrawerLoadingIndicator;
