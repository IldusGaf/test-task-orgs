import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { useEffect, useState } from "react";

interface ICustomSnackBarProps {
  error: string | undefined;
}

export const CustomSnackBar = ({ error }: ICustomSnackBarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(!!error);
  }, [error]);

  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
        {error}
      </Alert>
    </Snackbar>
  );
};
