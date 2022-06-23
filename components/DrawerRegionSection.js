import { observer } from "mobx-react-lite";
import { Box, IconButton, Typography } from "@mui/material";
import { Close } from "mdi-material-ui";
import { useUiStore } from "stores/uiStore";
import DrawerSection from "components/DrawerSection";
import RegionAvatar from "components/RegionAvatar";

const DrawerRegionSection = observer(({ region, clearTarget, closeDrawer }) => {
  const uiStore = useUiStore();

  return (
    <DrawerSection gray>
      <Box display="flex" alignItems="center">
        <RegionAvatar region={region} size={24} />
        <Box flexGrow={1} marginLeft={1}>
          <Typography variant="body1">
            <Box component="span" fontWeight={500}>
              {region.name}
            </Box>
          </Typography>
        </Box>
        <IconButton
          size="small"
          onClick={() => {
            if (clearTarget) uiStore.clearTarget();
            if (closeDrawer) uiStore.closeDrawer();
          }}
          aria-label="close side menu"
        >
          <Close fontSize="small" />
        </IconButton>
      </Box>
    </DrawerSection>
  );
});

export default DrawerRegionSection;
