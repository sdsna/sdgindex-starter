import { Box, Container, Typography } from "@mui/material";
import { Global } from "@emotion/react";
import AppLayout from "layouts/AppLayout";
import { ReportStoreProvider } from "stores/reportStore";
import ReportNavigation from "components/ReportNavigation";
import ReportThemeProvider from "components/ReportThemeProvider";
import ReportNavBar from "components/ReportNavBar";

const ReportLayout = ({ title, subtitle, color, children }) => (
  <ReportStoreProvider>
    <AppLayout overflow={null}>
      <ReportThemeProvider>
        <Box bgcolor={color}>
          <Container maxWidth="lg">
            <Box
              paddingY={{ xs: 3, sm: 6, md: 10 }}
              align="left"
              maxWidth="45rem"
            >
              <Typography variant="h1">
                <Box color="white" fontSize="1.2em">
                  {title}
                </Box>
              </Typography>
              <Typography variant="h2">
                <Box fontSize="1.2em" color="rgba(255,255,255,.75)">
                  {subtitle}
                </Box>
              </Typography>
            </Box>
          </Container>
        </Box>
        <Box bgcolor="white">
          <Container maxWidth="lg">
            <Box display="flex" justifyContent="space-between">
              <Box maxWidth="45rem">
                <Global
                  styles={{
                    ".SRLCaptionContainer.SRLCaptionContainer": {
                      height: "unset",
                    },
                  }}
                />
                {children}
              </Box>
              <ReportNavigation />
            </Box>
            <Box marginY={6} display="flex" justifyContent="center">
              <ReportNavBar />
            </Box>
          </Container>
        </Box>
      </ReportThemeProvider>
    </AppLayout>
  </ReportStoreProvider>
);

export default ReportLayout;
