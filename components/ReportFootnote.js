import { Box } from "@mui/material";

const ReportFootnote = ({ number, content }) => (
  <Box
    component="span"
    color="primary.main"
    onClick={() => alert(content)}
    style={{ cursor: "pointer" }}
  >
    <sup>{number}</sup>
  </Box>
);

export default ReportFootnote;
