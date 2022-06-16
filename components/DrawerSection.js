import { forwardRef } from "react";
import { Box } from "@mui/material";

const DrawerSection = forwardRef(({ gray = false, ...props }, ref) => (
  <Box
    ref={ref}
    bgcolor={gray ? "#fafafa" : "initial"}
    padding={1.5}
    {...props}
  />
));
DrawerSection.displayName = "DrawerSection";

export default DrawerSection;
