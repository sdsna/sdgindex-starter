import { useCallback, useEffect, useRef } from "react";
import svgPanZoom from "svg-pan-zoom";

export const useSvgPanZoom = (options = {}) => {
  const svgNode = useRef(null);
  const svgPanZoomRef = useRef(null);

  const initSvgPanZoom = useCallback(
    (node) => {
      if (node && !svgPanZoomRef.current) {
        svgPanZoomRef.current = svgPanZoom(node, options);
      }

      svgNode.current = node;
    },
    [options]
  );

  useEffect(() => {
    initSvgPanZoom(svgNode.current);

    return () => {
      // Perform a complete cleanup on unmount
      if (!svgPanZoomRef.current) return;
      svgPanZoomRef.current.destroy();
      svgPanZoomRef.current = null;
      svgNode.current = null;
    };
  }, [initSvgPanZoom]);

  const zoomIn = useCallback(() => {
    svgPanZoomRef.current?.zoomIn();
  }, []);

  const zoomOut = useCallback(() => {
    svgPanZoomRef.current?.zoomOut();
  }, []);

  const resetZoom = useCallback(() => {
    svgPanZoomRef.current?.fit();
    svgPanZoomRef.current?.center();
  }, []);

  const reset = useCallback(() => {
    svgPanZoomRef.current?.resize();
    resetZoom();
  }, [resetZoom]);

  return {
    ref: svgPanZoomRef,
    init: initSvgPanZoom,
    zoomIn,
    zoomOut,
    resetZoom,
    reset,
  };
};

export default useSvgPanZoom;
