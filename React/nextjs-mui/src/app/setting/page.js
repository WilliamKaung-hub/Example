"use client";

import { Button, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";

export default function Setting() {
  return (
    <div>
      {/* <Typography variant="h4">Setting Page</Typography>
      <Link href="/profile" passHref>
        <Button variant="contained">Go to Profile</Button>
      </Link>
      <Link href="/" passHref>
        <Button variant="contained">Go to Home</Button>
      </Link> */}
      <LinkButton href="/profile">GO to Profile by link Button</LinkButton>
    </div>
  );
}
