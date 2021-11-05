import { useEffect } from "react";
import { reaction } from "mobx";
import { observer } from "mobx-react-lite";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { useUiStore } from "stores/uiStore";
import * as gtag from "helpers/gtag";

// scrolls the context menu back to the top
const scrollElementToTop = (elementId) => {
  const element = document?.getElementById(elementId);

  if (!element) return;

  element.scrollTop = 0;
};

const AppDrawer = observer(({ children, permanent = false }) => {
  const uiStore = useUiStore();
  const isXsScreen = useMediaQuery((theme) =>
    theme.breakpoints.only("xs", { noSsr: false })
  );

  // Close and clear drawer when unmounting
  useEffect(() => {
    const closeDrawer = () => {
      uiStore.closeDrawer();
      uiStore.clearTarget();
    };

    return closeDrawer;
  }, []);

  useEffect(() => {
    scrollElementToTop("desktop-drawer");
    scrollElementToTop("mobile-drawer");
  });

  // Track target change in Google Analytics
  useEffect(() => {
    const disposeReaction = reaction(
      () => uiStore.target,
      (target) => {
        if (!target) return;

        gtag.event({
          action: "view",
          category: "sideMenu",
          label: `Target: ${target.id}`,
        });
      }
    );
    return () => {
      disposeReaction();
    };
  }, []);

  const showDrawer = uiStore.showDrawer || permanent;

  // If we have no target, do not render children
  if (!uiStore.target && !permanent) children = null;

  return (
    <>
      {!isXsScreen && (
        <Drawer
          open={showDrawer}
          variant="persistent"
          anchor="left"
          sx={{
            display: { xs: "none", sm: "block" },
            width: showDrawer ? 300 : 0,
            transition: "width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
            ["&, & > div"]: {
              top: 88,
              bottom: 0,
              height: "auto",
              overflowY: "hidden",
              /* Display below the mobile navbar */
              zIndex: 1000,
              overflowWrap: "break-word",
            },
          }}
          PaperProps={{
            elevation: 2,
            sx: { width: 300 },
          }}
        >
          <Box
            id="desktop-drawer"
            position="absolute"
            width={1}
            height={1}
            sx={{
              overflowY: "auto",
              scrollbarWidth: "thin",
            }}
          >
            {children}
          </Box>
        </Drawer>
      )}
      {isXsScreen && (
        <Drawer
          open={uiStore.showDrawer}
          onClose={uiStore.closeDrawer}
          variant="temporary"
          anchor="bottom"
        >
          <Box
            id="mobile-drawer"
            maxHeight="80vh"
            sx={{ overflowY: "auto", scrollbarWidth: "thin" }}
          >
            {children}
          </Box>
        </Drawer>
      )}
    </>
  );
});

export default AppDrawer;
