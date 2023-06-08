import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const Add = () => {
  return (
    <Box>
      <Typography variant="h3">Add Employee</Typography>
      <Box component="form">
        <TextField id="standard-basic" label="Name" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Age" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Email" variant="standard" />
      </Box>
    </Box>
  );
};

export default Add;
