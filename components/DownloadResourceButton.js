import { Box, ButtonBase, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Button = styled(ButtonBase)({
  width: "100%",
  flexDirection: "column",
  padding: 8,
  borderRadius: 8,
  transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  ":hover": {
    /* mirror the hover effect of navigation items */
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
});
Button.defaultProps = {
  focusRipple: true,
  component: "a",
};

const Thumbnail = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
  width: "auto",
  height: "auto",
  display: "block",
  border: "4px solid white",
  boxShadow: "2px 2px 5px #0000006b",
  objectFit: "contain",
  background: "white",
  transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  ":hover": {
    transform: "scale(1.1)",
  },
});

const DownloadResourceButton = ({
  href,
  thumbnail,
  height,
  label,
  type,
  onClick,
}) => (
  <Button href={href} onClick={onClick} target="_blank">
    <Box
      width="100%"
      height={height}
      display="flex"
      alignContent="center"
      justifyContent="center"
      marginBottom={2}
    >
      <Thumbnail src={thumbnail} />
    </Box>
    <Typography variant="body1" align="center" gutterBottom>
      {label}
    </Typography>
    <Typography variant="overline" align="center" color="textSecondary">
      {type}
    </Typography>
  </Button>
);

export default DownloadResourceButton;
