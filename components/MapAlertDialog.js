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
        Note sur les frontières des départements
      </Link>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Note sur les frontières des départements</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Les frontières, couleurs, dénominations et autres informations
            figurant sur cette carte n&apos;impliquent aucun jugement de la part
            de SDSN concernant le statut juridique d&apos;un territoire ou
            l&apos;approbation ou l&apos;acceptation de ces frontières
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MapAlertDialog;
