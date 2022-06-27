import { styled } from "@mui/material/styles";

const StyledImage = styled("img")({
  position: "relative",
  padding: 0,
  maxWidth: "100%",
  width: "100%",
  userDrag: "none",
  userSelect: "none",
});

const DimensionIcon = ({ identifier, ...otherProps }) => (
  <StyledImage
    onDragStart={(e) => {
      e.preventDefault();
    }}
    draggable="false"
    src={`/static/dimensions/icons/${identifier.toLowerCase()}.png`}
    {...otherProps}
  />
);

export default DimensionIcon;
