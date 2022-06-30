import { createContext, useContext, useEffect } from "react";
import { useLocalObservable } from "mobx-react-lite";

const mapStoreContext = createContext(null);

export const MapStoreProvider = ({ children, getTooltipText }) => {
  const store = useLocalObservable(() => ({
    tooltip: null,
    getTooltipText,
    currentYear: "latest",
    hideTooltip: () => {
      store.tooltip = null;
    },
    setCurrentYear: (year) => {
      store.currentYear = year;

      // Update tooltip text, if currently shown
      if (store.tooltip != null) {
        store.tooltip.text = store.getTooltipText(
          store.tooltip.department,
          store.currentYear
        );
      }
    },
    showTooltip: ({ department, event: { pageX: X, pageY: Y } }) => {
      const anchor = {
        getBoundingClientRect: () => ({
          top: Y,
          right: X,
          bottom: Y,
          left: X,
          width: 0,
          height: 0,
        }),
        clientWidth: 0,
        clientHeight: 0,
      };

      store.tooltip = {
        department,
        anchor,
        text: store.getTooltipText(department, store.currentYear),
      };
    },
  }));

  useEffect(() => {
    store.hideTooltip();
    store.getTooltipText = getTooltipText;
  }, [getTooltipText]);

  return (
    <mapStoreContext.Provider value={store}>
      {children}
    </mapStoreContext.Provider>
  );
};

export const useMapStore = () => {
  const mapStore = useContext(mapStoreContext);
  if (!mapStore) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useMapStore must be used within a MapStoreProvider.");
  }
  return mapStore;
};
