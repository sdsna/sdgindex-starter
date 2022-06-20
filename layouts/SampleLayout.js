import { UiStoreProvider } from "stores/uiStore";
import AppLayout from "layouts/AppLayout";

const SampleLayout = ({ children, Drawer, ...props }) => (
  <UiStoreProvider>
    <AppLayout Drawer={Drawer} {...props}>
      {children}
    </AppLayout>
  </UiStoreProvider>
);

export default SampleLayout;
