"use client"
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function Navbar() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
            <Typography variant='h6' sx={{ flexGrow:1}}>
                MyApp
            </Typography>
            <Button color = "inherit">Home</Button>
            <Button color ="inherit">Dashboard</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
