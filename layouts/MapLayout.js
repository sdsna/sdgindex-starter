import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import FullScreenAppLayout from "layouts/FullScreenAppLayout";
import DrawerLoadingIndicator from "components/DrawerLoadingIndicator";
const Map = dynamic(() => import("components/Map"), {
  ssr: false,
  loading: () => <DrawerLoadingIndicator />,
});
import MapTooltip from "components/MapTooltip";
import { UiStoreProvider } from "stores/uiStore";
import { MapStoreProvider } from "stores/mapStore";

const MapLayout = ({
  children,
  assessment,
  Drawer,
  countries,
  getCountryFill,
  getTooltipText,
  stroke,
}) => (
  <UiStoreProvider>
    <FullScreenAppLayout
      mobileMenuLabel={assessment.label}
      drawerProps={{ permanent: true }}
      Drawer={Drawer}
    >
      <Box height="100%" display="flex" flexDirection="column">
        <MapStoreProvider getTooltipText={getTooltipText}>
          <Box
            display="flex"
            flexGrow={1}
            overflow="hidden"
            position="relative"
          >
            <Map
              countries={countries}
              stroke={stroke}
              getCountryFill={getCountryFill}
            >
              {children}
            </Map>
            <MapTooltip />
          </Box>
        </MapStoreProvider>
      </Box>
    </FullScreenAppLayout>
  </UiStoreProvider>
);

export default MapLayout;
