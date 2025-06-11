"use client";
import { Button, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";

export default function Profile() {
  return (
    <div>
      {/* <Typography variant="h4">Profile</Typography>
      <Link href="/setting" passHref>
        <Button variant="contained">Go to setting</Button>
      </Link> */}
       <LinkButton href="/setting">GO to Setting by link Button</LinkButton>
    </div>
  );
}
