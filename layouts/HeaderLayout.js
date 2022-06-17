import { Box, Container, Paper, Typography } from "@mui/material";
import AppLayout from "layouts/AppLayout";
import HeaderTabs from "components/HeaderTabs";

const HeaderLayout = ({
  title,
  subtitle,
  children,
  Drawer,
  tabs,
  activeTab,
  fullWidth = false,
}) => (
  <Box display="flex" minHeight="100vh" flexDirection="column">
    <AppLayout Drawer={Drawer}>
      <Box flexGrow={1} display="flex" flexDirection="column">
        <Paper square>
          <Container maxWidth="lg">
            <Box paddingTop={4} paddingBottom={tabs ? 3 : 4}>
              <Typography variant="h1">{title}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {subtitle}
              </Typography>
            </Box>
            <Box>
              <HeaderTabs tabs={tabs} activeTab={activeTab} />
            </Box>
          </Container>
        </Paper>
        <Container
          maxWidth={fullWidth ? false : "lg"}
          disableGutters={fullWidth}
        >
          {children}
        </Container>
      </Box>
    </AppLayout>
  </Box>
);

export default HeaderLayout;
