import { ButtonBase, Box, Typography } from "@mui/material";
import { ChevronDown } from "mdi-material-ui";
import { useUiStore } from "stores/uiStore";

const MobileMenuOpenerButton = ({ label }) => {
  const uiStore = useUiStore();

  return (
    <ButtonBase
      component={Box}
      alignItems="center"
      overflow="hidden"
      style={{ padding: 16, display: "flex" }}
      boxShadow={4}
      onClick={() => uiStore.openDrawer(null)}
    >
      <Box flexGrow="1" flexDirection="column" overflow="hidden">
        <Typography variant="h4" noWrap>
          {label}
        </Typography>
      </Box>
      <Box marginLeft={1}>
        <ChevronDown />
      </Box>
    </ButtonBase>
  );
};

export default MobileMenuOpenerButton;
