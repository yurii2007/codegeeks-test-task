import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

interface AlertDialogProps extends DialogProps {
  action: () => void;
  onClose: () => void;
}

const AlertDialog = ({ onClose, action, ...props }: AlertDialogProps) => {
  return (
    <Dialog onClose={onClose} {...props}>
      <DialogTitle id="alert-dialog-title">Delete Event</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete selected event?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={action} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
