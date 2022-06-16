import { Typography } from "@mui/material";
import DrawerHeading from "components/DrawerHeading";

const DrawerHeadingWithCaption = ({ children, caption }) => (
  <>
    <DrawerHeading gutterBottom={false}>{children}</DrawerHeading>
    <Typography variant="caption" color="textSecondary" gutterBottom>
      {caption}
    </Typography>
  </>
);

export default DrawerHeadingWithCaption;
