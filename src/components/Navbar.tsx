"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        height: "80px",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Toolbar
        sx={{ height: "100%", display: "flex", justifyContent: "right" }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffffff",
            color: theme.palette.primary.main,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          User List
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
