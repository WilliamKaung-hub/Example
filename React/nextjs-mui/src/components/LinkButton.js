"use client"
import { Button } from '@mui/material'
import Link from 'next/link'
import React, { Children } from 'react'



export default function LinkButton({href,children}) {
  return (
    <div>
      <Link href ={href} passHref>
      <Button variant='outlined'>{children}</Button></Link>
    </div>
  )
}
