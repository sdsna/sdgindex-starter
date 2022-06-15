import { cloneElement, useEffect, useMemo } from "react";
import { reaction } from "mobx";
import { observer } from "mobx-react-lite";
import ResizeObserver from "react-resize-observer";
import { SvgLoader, SvgProxy } from "react-svgmt";
import { styled } from "@mui/material/styles";
import { useDebouncedCallback } from "use-debounce";
import useSvgPanZoom from "hooks/useSvgPanZoom";
import { useUiStore } from "stores/uiStore";
import { useMapStore } from "stores/mapStore";
import keepMapOnScreen from "helpers/keepMapOnScreen";
import mapEventsHandler from "helpers/mapEventsHandler";

const SvgMap = styled(SvgLoader)({
  width: "100%",
  height: "100%",
  display: "block",
  ".countries, circle:not([fill])": {
    fill: "#979797",
  },
  ".countries, circle": {
    transition: "fill 0.3s ease-in-out",
  },
  '[clickable="clickable"]:hover': {
    stroke: "yellow",
    strokeWidth: 2,
  },
  '[clickable="clickable"]': {
    cursor: "pointer",
  },
  ".geojson": {
    stroke: "#fff",
    fill: "none",
    pointerEvents: "none",
  },
});

const Map = observer(({ children, countries, getCountryFill, stroke }) => {
  const uiStore = useUiStore();
  const mapStore = useMapStore();

  if (stroke == null) stroke = "#fff";

  const options = useMemo(
    () => ({
      zoomScaleSensitivity: 1,
      minZoom: 1,
      beforePan: keepMapOnScreen,
      fit: 1,
      center: 1,
      customEventsHandler: mapEventsHandler,
    }),
    [keepMapOnScreen, mapEventsHandler]
  );

  const {
    init: initSvgPanZoom,
    zoomIn,
    zoomOut,
    resetZoom,
    reset: resetMap,
  } = useSvgPanZoom(options);

  const resetMapAfterDelay = useDebouncedCallback(resetMap, 100);

  useEffect(() => {
    // On change of tooltip countryId, move the relevant SVG node to the very
    // end of the SVG elements, so that the node is drawn last and displayed
    // on top of other SVG nodes. This ensures that the stroke on hover does
    // not get cut off.
    const disposeReaction = reaction(
      () => mapStore.tooltip?.country?.id,
      (countryId) => {
        if (!countryId) return;

        // Move node to the end of the list of children, so that it is drawn
        // last and on top of all other elements
        const node = document.querySelector(`svg #${countryId}`);
        if (node) node.parentElement.appendChild(node);
      }
    );
    return disposeReaction;
  }, []);

  return (
    <>
      <SvgMap path="/static/benin.svg" onSVGReady={initSvgPanZoom}>
        <>
          {/* Reset fill and remove all event listeners */}
          <SvgProxy
            selector="path"
            fill="#979797"
            stroke={stroke}
            clickable="false"
            onClick={() => null}
            onMouseMove={() => null}
            onMouseLeave={() => null}
          />
          {countries.map((country) => (
            <SvgProxy
              key={country.id}
              selector={`[name="${country.name}"]`}
              clickable="clickable"
              fill={
                country.fill || getCountryFill(country, mapStore.currentYear)
              }
              onClick={() => uiStore.openDrawer(country)}
              onMouseMove={(event) => mapStore.showTooltip({ event, country })}
              onMouseLeave={mapStore.hideTooltip}
            />
          ))}
        </>
      </SvgMap>
      {cloneElement(children, { zoomIn, zoomOut, resetZoom })}
      <ResizeObserver onResize={resetMapAfterDelay} />
    </>
  );
});

export default Map;
