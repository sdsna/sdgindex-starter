import { createElement } from "react";
import { Box, ButtonBase, Divider } from "@mui/material";
import {
  Plus,
  ArrowExpandAll,
  Minus,
  Star,
  ArrowTopRight,
  Numeric,
} from "mdi-material-ui";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import MapFooter from "components/MapFooter";

const BoxWithoutPointerEvents = styled(Box)({
  pointerEvents: "none",
  "a, button": {
    pointerEvents: "auto",
  },
});

const VisualizationButton = styled(ButtonBase)(
  {
    padding: 12,
    transition: "opacity 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    display: "flex",
    flexDirection: "column",
    minWidth: 70,
    ":hover": {
      opacity: 1,
    },

    ":first-of-type": {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },

    ":last-of-type": {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
  },
  ({ disabled, isactive }) => {
    if (disabled) return { color: "gray", background: "lightgray" };
    if (isactive) return { color: "white", background: "#1a305b" };
    return { opacity: 0.3, background: "white" };
  }
);

const ICONS = {
  scores: Numeric,
  ratings: Star,
  trends: ArrowTopRight,
  values: Numeric,
};

const MapControls = ({
  links,
  activeDimension,
  disabled = [],
  zoomIn,
  zoomOut,
  resetZoom,
}) => (
  <>
    <BoxWithoutPointerEvents position="absolute" left={0} right={0} bottom={0}>
      <Box
        display="flex"
        flexGrow={1}
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Box
          marginLeft={2}
          marginBottom={1}
          boxShadow={3}
          display="flex"
          borderRadius={2}
        >
          {Object.keys(links).map((dimension) => {
            const isEnabled = !disabled.includes(dimension);

            return (
              <Link key={dimension} href={links[dimension]} passHref>
                <VisualizationButton
                  component="a"
                  variant="outlined"
                  disabled={!isEnabled}
                  isactive={activeDimension === dimension ? 1 : 0}
                >
                  {createElement(ICONS[dimension])}
                  {`${dimension[0].toUpperCase()}${dimension.substring(1)}`}
                </VisualizationButton>
              </Link>
            );
          })}
        </Box>
        <Box
          marginRight={2}
          marginBottom={1}
          boxShadow={3}
          display="flex"
          flexDirection="column"
          bgcolor="white"
          borderRadius={2}
        >
          <ButtonBase
            variant="outlined"
            sx={{
              padding: 0.5,
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
            onClick={zoomIn}
            aria-label="Zoom in"
          >
            <Plus fontSize="small" />
          </ButtonBase>
          <Divider />
          <ButtonBase
            variant="outlined"
            sx={{ padding: 0.5 }}
            onClick={resetZoom}
            aria-label="Reset zoom"
          >
            <ArrowExpandAll fontSize="small" />
          </ButtonBase>
          <Divider />
          <ButtonBase
            variant="outlined"
            sx={{
              padding: 0.5,
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
            onClick={zoomOut}
            aria-label="Zoom out"
          >
            <Minus fontSize="small" />
          </ButtonBase>
        </Box>
      </Box>
      <Box display={{ xs: "none", md: "flex" }} justifyContent="center">
        <MapFooter />
      </Box>
    </BoxWithoutPointerEvents>
  </>
);

export default MapControls;
