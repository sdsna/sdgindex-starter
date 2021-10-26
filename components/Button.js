import { Stack, Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

const BasicButtons = () => (
  <Stack spacing={2} direction="row">
    <Button variant="text">Testing</Button>
    <StyledButton variant="contained">if emotion</StyledButton>
    <Button
      variant="outlined"
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 1,
        p: 2,
        minWidth: 300,
      }}
    >
      works
    </Button>
  </Stack>
);

export default BasicButtons;
