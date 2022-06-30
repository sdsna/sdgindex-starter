import { useState, useEffect, useRef, useCallback } from "react";
import useThrottledOnScroll from "hooks/useThrottledOnScroll";

// Adapted from: https://gist.github.com/iDVB/a041da210605f05e0b36ac03ed403c00
const useScrollSpy = ({ items = [], target } = {}) => {
  // Set target to window unless we're on server
  if (target == null && typeof window !== "undefined") target = window;

  const itemsWithNodeRef = useRef([]);
  useEffect(() => {
    itemsWithNodeRef.current = getItemsClient(items);
  }, [items]);

  const [activeState, setActiveState] = useState(null);

  const findActiveIndex = useCallback(() => {
    let active = { anchor: null };

    for (let i = itemsWithNodeRef.current.length - 1; i >= 0; i -= 1) {
      const item = itemsWithNodeRef.current[i];

      if (process.env.NODE_ENV !== "production") {
        if (!item.node) {
          console.error(
            `Missing node on the item ${JSON.stringify(item, null, 2)}`
          );
        }
      }

      if (
        item.node &&
        item.node.offsetTop <
          document.documentElement.scrollTop +
            document.documentElement.clientHeight / 8
      ) {
        active = item;
        break;
      }
    }

    setActiveState(active.anchor);
  }, []);

  useThrottledOnScroll(items.length > 0 ? findActiveIndex : null, 166);

  return activeState;
};

const getItemsClient = (items) =>
  items.map(({ anchor }) => ({
    anchor,
    node: document.getElementById(anchor),
  }));

export default useScrollSpy;
