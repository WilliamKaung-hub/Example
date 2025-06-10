"use client"
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <div>
      <Box sx={{ bgcolor:'grey.200',p: 2, textAlign:'center',mt:4}}>
        <Typography variant="body2"> 2025 MyApp. All Right reserved.</Typography>
      </Box>
    </div>
  );
}
