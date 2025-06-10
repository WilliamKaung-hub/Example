"use client"

import {Box, colors, Typography} from "@mui/material";

export default function MUISx() {
    return (
     <>
        <Box
        sx={{
            color: "primary.main",
            padding: 2,
            display:{ xs:"none",md:"block"},
        
        }}
        >
            This box is visible on md and larger
        </Box>
        <Box
        sx={{color:"secondary.main",display:{xs: "block", md:"none"}}}>
        Thi box is visible on smaill screens
        </Box>
    </>
    )
}