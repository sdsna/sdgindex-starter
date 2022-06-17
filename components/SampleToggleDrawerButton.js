import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";
import { useUiStore } from "stores/uiStore";

const SampleToggleDrawerButton = observer(() => {
  const uiStore = useUiStore();

  return (
    <Button
      variant="contained"
      onClick={() =>
        uiStore.showDrawer ? uiStore.closeDrawer() : uiStore.openDrawer(true)
      }
    >
      Toggle Drawer
    </Button>
  );
});

export default SampleToggleDrawerButton;
