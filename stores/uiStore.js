import { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";

const uiStoreContext = createContext(null);

export const UiStoreProvider = ({ children }) => {
  const uiStore = useLocalObservable(() => ({
    target: null,
    showDrawer: false,
    openDrawer(target) {
      this.showDrawer = true;
      this.target = target;
    },
    closeDrawer() {
      this.showDrawer = false;
    },
    clearTarget() {
      this.target = null;
    },
  }));
  return (
    <uiStoreContext.Provider value={uiStore}>
      {children}
    </uiStoreContext.Provider>
  );
};

export const useUiStore = () => {
  const uiStore = useContext(uiStoreContext);
  if (!uiStore) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useUiStore must be used within a UiStoreProvider.");
  }
  return uiStore;
};
