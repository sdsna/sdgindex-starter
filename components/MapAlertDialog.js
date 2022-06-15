import { useState } from "react";
import {
  Link,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const MapAlertDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link
        underline="hover"
        onClick={() => setOpen(true)}
        sx={{ cursor: "pointer" }}
      >
        Note on department boundaries
      </Link>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Note on department boundaries</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            The boundaries, colors, denominations, and other information shown
            on this map do not imply any judgment on the part of SDSN concerning
            the legal status of any territory or the endorsement or acceptance
            of such boundaries.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MapAlertDialog;
