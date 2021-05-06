import { observer } from "mobx-react-lite";
import { Button } from "@material-ui/core";
import { useUiStore } from "stores/uiStore";

const SampleToggleDrawerButton = observer(() => {
  const uiStore = useUiStore();

  return (
    <Button
      color="primary"
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
