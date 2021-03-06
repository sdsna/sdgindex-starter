import { Typography, Container } from "@mui/material";
import SampleLayout from "layouts/SampleLayout";
import SampleDrawer from "drawers/SampleDrawer";
import SampleToggleDrawerButton from "components/SampleToggleDrawerButton";

const Index = () => (
  <Container>
    <Typography variant="h2" component="h1">
      Hello World!
    </Typography>
    <SampleToggleDrawerButton />
  </Container>
);

Index.Layout = SampleLayout;
Index.layoutProps = () => ({ Drawer: <SampleDrawer /> });
export default Index;
