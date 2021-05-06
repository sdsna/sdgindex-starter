import { Container, Typography } from "@material-ui/core";
import SampleLayout from "layouts/SampleLayout";
import SampleDrawer from "drawers/SampleDrawer";
import SampleToggleDrawerButton from "components/SampleToggleDrawerButton";

const Index = () => (
  <Container>
    <Typography variant="h1" gutterBottom>
      Hello World!
    </Typography>
    <SampleToggleDrawerButton />
  </Container>
);

Index.Layout = SampleLayout;
Index.layoutProps = () => ({ Drawer: SampleDrawer });
export default Index;
