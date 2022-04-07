import { observer, useLocalObservable } from "mobx-react-lite";
import ResizeObserver from "react-resize-observer";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import AppDrawer from "drawers/AppDrawer";

const AppLayout = observer(
  ({
    fluid = false,
    overflow = "auto",
    children,
    Drawer = null,
    drawerProps = {},
    onContentResize = null,
    footer = true,
  }) => {
    const theme = useTheme();
    const store = useLocalObservable(() => ({
      width: null,
      onResize(rect) {
        // Trigger custom user resize
        onContentResize ? onContentResize(rect) : null;

        const { width } = rect;

        if (width < theme.breakpoints.sm) {
          this.width = "small";
        } else if (width < theme.breakpoints.md) {
          this.width = "medium";
        } else if (width >= theme.breakpoints.md) {
          this.width = "large";
        }
      },
    }));

    return (
      <>
        <NavBar fluid={fluid} />
        <Box display="flex" flexGrow={1} overflow={overflow}>
          {Drawer && <AppDrawer {...drawerProps}>{Drawer}</AppDrawer>}
          <Box
            id="content"
            display="flex"
            flexGrow={1}
            flexDirection="column"
            position="relative"
            overflow={overflow}
            className={store.width}
            maxWidth="100%"
          >
            <ResizeObserver onResize={store.onResize} />
            {children}
            {footer ? <Footer /> : null}
          </Box>
        </Box>
      </>
    );
  }
);

export default AppLayout;
