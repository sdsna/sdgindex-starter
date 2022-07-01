import { useState } from "react";
import {
  Box,
  ButtonBase,
  CircularProgress,
  Dialog,
  DialogContent,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import { Menu } from "mdi-material-ui";
import DrawerSection from "components/DrawerSection";
import { styled } from "@mui/material/styles";

// Filter out/remove anchorEl & disablePortal prop
const StyledDiv = styled("div", {
  shouldForwardProp: (prop) => !["anchorEl", "disablePortal"].includes(prop),
})();

const PageSelectionButton = ({
  children,
  loading = false,
  options,
  getOptionLabel,
  getOptionGroup,
  modalTitle,
  modalDescription,
  onSelect,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonBase
        onClick={() => setOpen(true)}
        sx={{
          width: 1,
          textAlign: "left",
          [":hover"]: {
            background: "rgba(0, 0, 0, 0.04)",
            transition: "background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
        }}
      >
        <DrawerSection display="flex" flexGrow={1}>
          <Box flexGrow="1" align>
            {children}
          </Box>
          <Box marginLeft={1} display="flex" alignSelf="center">
            <Menu />
          </Box>
        </DrawerSection>
      </ButtonBase>
      <Dialog fullWidth onClose={() => setOpen(false)} open={open}>
        <DialogContent>
          <Typography variant="h2">{modalTitle}</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {modalDescription}
          </Typography>
          {loading ? (
            <Box my={2}>
              <CircularProgress />
            </Box>
          ) : (
            <Autocomplete
              options={options}
              autoHighlight
              open={true}
              fullWidth
              onChange={(_event, option) => {
                onSelect(option);
                setOpen(false);
              }}
              getOptionLabel={getOptionLabel}
              groupBy={getOptionGroup}
              PopperComponent={StyledDiv}
              PaperComponent="div"
              renderInput={(params) => (
                <TextField {...params} label="Rechercher" size="small" />
              )}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PageSelectionButton;
