import { Avatar, Box, Typography } from "@mui/material";
import { getFlagPath } from "helpers/profiles";

const getInitials = (name) =>
  name
    .toUpperCase()
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2);

const RegionAvatar = ({ region, size, width, height, props }) => {
  if (size != null) {
    width = `${size}px`;
    height = `${size}px`;
  }

  const flagPath = getFlagPath(region);

  return (
    <Avatar
      imgProps={{ loading: "lazy" }}
      variant="square"
      src={flagPath}
      sx={{
        width,
        height,
        background: flagPath ? "transparent" : props.theme.palette.primary.main,
        img: {
          objectFit: "contain",
        },
      }}
    >
      <Typography variant="body1">
        <Box fontSize={size * 0.4}>{getInitials(region.name)}</Box>
      </Typography>
    </Avatar>
  );
};

export default RegionAvatar;
