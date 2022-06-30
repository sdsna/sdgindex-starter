import { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";

const reportStoreProvider = createContext(null);

export const ReportStoreProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    items: [],
    addItem({ label, anchor, indent = false, type }) {
      store.items.push({ label, anchor, indent, type });
    },
    removeItem(anchor) {
      store.items = store.items.filter((item) => item.anchor !== anchor);
    },
    get headings() {
      return store.items.filter((item) => item.type === "heading");
    },
    get figures() {
      return store.items.filter((item) => item.type === "figure");
    },
    get tables() {
      return store.items.filter((item) => item.type === "table");
    },
    get boxes() {
      return store.items.filter((item) => item.type === "box");
    },
  }));

  return (
    <reportStoreProvider.Provider value={store}>
      {children}
    </reportStoreProvider.Provider>
  );
};

export const useReportStore = () => {
  const reportStore = useContext(reportStoreProvider);
  if (!reportStore) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error(
      "useReportStore must be used within a ReportStoreProvider."
    );
  }
  return reportStore;
};
