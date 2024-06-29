import React from 'react';
import { Snackbar } from "@mui/material";
import { Alert as MuiAlert } from "@mui/material";
import { NavsState } from '../../../Contexts/Navs_Context';

const Mui_Alert = () => {

  const { alert, setAlert } = NavsState()

  // Mui alert
    const handleCloseAlert = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setAlert({ open: false });
    };
  // Mui alert

    return (
      <>
        <Snackbar
          open={alert.open}
          autoHideDuration={3000}
          onClose={handleCloseAlert}
          style={{position: "relative"}}
        >
          <MuiAlert
            onClose={handleCloseAlert}
            elevation={0}
            variant="filled"
            severity={alert.type}
          >
            {alert.message}
          </MuiAlert>
        </Snackbar>
      </>
    )
};

export default Mui_Alert;