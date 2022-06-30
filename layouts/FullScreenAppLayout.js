import { Box } from "@mui/material";
import AppLayout from "layouts/AppLayout";
import MobileMenuOpenerButton from "components/MobileMenuOpenerButton";

const FullScreenAppLayout = ({ mobileMenuLabel, ...props }) => (
  <Box
    position="fixed"
    width={1}
    height={1}
    display="flex"
    flexDirection="column"
  >
    <AppLayout overflow="hidden" fluid={true} footer={false} {...props} />
    {mobileMenuLabel && (
      <Box display={{ xs: "block", sm: "none" }}>
        <MobileMenuOpenerButton label={mobileMenuLabel} />
      </Box>
    )}
  </Box>
);

export default FullScreenAppLayout;
