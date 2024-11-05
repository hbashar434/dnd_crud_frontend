"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Grid,
  Snackbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import { UserFormInputs } from "@/types/userTypes";
import { createUser } from "@/lib/user";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { SnackbarCloseReason } from "@mui/material/Snackbar";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UserForm = () => {
  const { register, handleSubmit, reset } = useForm<UserFormInputs>();
  const [open, setOpen] = useState(false); // State to control Snackbar visibility

  const onSubmit = async (data: UserFormInputs) => {
    const res = await createUser(data);
    console.log(res);
    if (res.success) {
      reset();
      setOpen(true); // Open the Snackbar on success
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false); // Close the Snackbar
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "100%",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          mb: 2,
        }}
      >
        <IconButton
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: 30,
            height: 30,
            "&:hover": { backgroundColor: "primary.dark" },
            mr: 1,
          }}
        >
          <AddIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="h2"
          sx={{ textTransform: "uppercase" }}
        >
          Add New User
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="First Name"
            {...register("firstName", { required: true })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Last Name"
            {...register("lastName", { required: true })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Display Name"
            {...register("displayName", { required: true })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Email"
            type="email"
            {...register("email", { required: true })}
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Date of Birth"
            type="date"
            {...register("dateOfBirth", { required: true })}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Phone"
            type="tel"
            {...register("phone", { required: true })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} />
        <Grid item xs={12} sm={6} md={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ height: "100%" }}
          >
            Save
          </Button>
        </Grid>
      </Grid>

      {/* Snackbar for success alert */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          User created successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UserForm;
