import { Box, Typography } from "@mui/material";

const ReportParagraph = ({ children, primary }) => (
  <Box marginY={4}>
    <Typography variant="body1" color={primary ? "primary" : "textPrimary"}>
      {children}
    </Typography>
  </Box>
);

export default ReportParagraph;
