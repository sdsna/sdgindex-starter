import { Typography } from "@mui/material";
import SampleLayout from "layouts/SampleLayout";
import SampleDrawer from "drawers/SampleDrawer";
import Button from "components/Button";

const Index = () => (
  <>
    <Typography variant="h2" component="h1">
      Hello World!
    </Typography>
    <Button />
  </>
);

Index.Layout = SampleLayout;
Index.layoutProps = () => ({ Drawer: SampleDrawer });
export default Index;
