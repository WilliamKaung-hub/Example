"use client"
import { Box, keyframes, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'next/navigation';
export default function BlogDetail() {
    const params = useParams();
    console.log('Blog ID:',params.id)
    const blogID = params.id;

  return (
    <div>
      <Box>
        <Typography>Blog: {blogID} </Typography>
      </Box>
    </div>
  )
}
