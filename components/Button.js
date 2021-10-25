import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Testing</Button>
      <Button variant="contained">if emotion</Button>
      <Button variant="outlined">works</Button>
    </Stack>
  );
}
