import { Box } from "@mui/material";

const Emphasis = ({ primary, secondary, ...props }) => {
  let color = null;

  if (primary) color = "primary.main";
  if (secondary) color = "secondary.main";

  return <Box component="span" fontWeight={500} color={color} {...props} />;
};

export default Emphasis;
