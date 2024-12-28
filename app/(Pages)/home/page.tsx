"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        anchorOrigin={{horizontal:"center",vertical:"top"}}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}>

        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          className='w-[90vw]'
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </div>
  );
}