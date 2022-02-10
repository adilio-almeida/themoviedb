import { Button, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { key } from "../auth";

export default function Header() {
  return (
      <Paper sx={{ backgroundColor: "#5C16C5", marginBottom: '20px' }}>
        <Typography >Movier</Typography>
      </Paper>
  );
}
