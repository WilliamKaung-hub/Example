"use client"
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <div>
      <Box sx={{ bgcolor:'black', color:'white',align:'center',mt:4}}>
        <Typography variant="body2"> 2025 MyApp. All Right reserved.</Typography>
      </Box>
    </div>
  );
}
