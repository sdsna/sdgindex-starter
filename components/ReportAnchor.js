import { Box, IconButton } from "@mui/material";
import { LinkVariant } from "mdi-material-ui";
import { styled } from "@mui/material/styles";

const AnchorButton = styled(IconButton)``;

const AnchorContainer = styled(Box)(({ theme }) => ({
  /* On desktop devices, only show anchor on hover */
  [theme.breakpoints.up("md")]: {
    [AnchorButton]: {
      visibility: "hidden",
    },
    ["&:hover"]: {
      [AnchorButton]: {
        visibility: "visible",
      },
    },
  },
}));

const ReportAnchor = ({ anchor, children }) => (
  <>
    {/* Offset the height of the navbar */}
    <a id={anchor} style={{ position: "relative", top: -100 }} />
    <AnchorContainer display="flex" alignItems="center">
      <Box flexGrow={1}>{children}</Box>
      <Box marginLeft={1}>
        <AnchorButton component="a" href={`#${anchor}`}>
          <LinkVariant />
        </AnchorButton>
      </Box>
    </AnchorContainer>
  </>
);

export default ReportAnchor;
