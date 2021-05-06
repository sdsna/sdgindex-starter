import { Container, Typography } from "@material-ui/core";
import SampleLayout from "layouts/SampleLayout";
import SampleDrawer from "drawers/SampleDrawer";
import SampleToggleDrawerButton from "components/SampleToggleDrawerButton";

const Index = () => (
  <SampleLayout Drawer={SampleDrawer}>
    <Container>
      <Typography variant="h1" gutterBottom>
        Hello World!
      </Typography>
      <SampleToggleDrawerButton />
    </Container>
  </SampleLayout>
);

export default Index;
