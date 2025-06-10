"use client"
import { Container } from '@mui/material'
import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Navlayout({children}) {
  return (
    <div>
      <>
      <Navbar/>
      <Container sx={{mt:4}}>{children}</Container>
      <Footer/>
      </>
    </div>
  )
}
