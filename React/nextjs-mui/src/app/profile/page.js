"use client";
import { Button, Typography } from "@mui/material";
import React from "react";

export default function Profile() {
  return (
    <div>
      <Typography variant="h4">Profile</Typography>
      <Link href="/setting" passHref>
        <Button variant="contained">Go to setting</Button>
      </Link>
    </div>
  );
}
