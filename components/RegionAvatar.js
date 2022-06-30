import { Avatar } from "@mui/material";

const RegionAvatar = ({ size, width, height }) => {
  if (size != null) {
    width = `${size}px`;
    height = `${size}px`;
  }

  return (
    <Avatar
      imgProps={{ loading: "lazy" }}
      variant="square"
      src={"/static/profiles/flags/BEN.svg"}
      sx={{
        width,
        height,
        background: "transparent",
        img: {
          objectFit: "contain",
        },
      }}
    ></Avatar>
  );
};

export default RegionAvatar;
