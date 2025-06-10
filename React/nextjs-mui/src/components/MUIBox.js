import { Box } from "@mui/material";
import { defaultHead } from "next/head";

export default function MUIBOX() {
    return(
        <Box sx={{ padding: 6, backgroundColor : "grey.200"}}>
            This is a box with padding and back ground.
        </Box>
    );
}