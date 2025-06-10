"use client"

import BasicForm from "@/components/BasicForm/BasicForm";


//import { Box, Typography } from "@mui/material";

// import {Button,Typography} from '@mui/material';
// import MUIBOX from '@/components/MUIBox';
// import MUIContainer from '@/components/MUIContainer';
// import MUIGrid from '@/components/MUIGrid';
// import MUIStack from '@/components/MUIStack';
// import MUISx from '@/components/MUISx';
//import NavLayout from '@/components/NavLayout/Navlayout';


export default function Home(){
  return(
    <div>
      {/* <Typography component="h1">Welcome to nextjs with MUI</Typography>
      <Button variant ="contained" color='primary'>Contained</Button>
      <Button variant ="outlined" color='primary'>OutLine</Button>
      <Button variant ="text" color='primary'>Text</Button>

      <MUIBOX/>
      <MUIContainer/>
      <MUIGrid/>
      <MUIStack/>
      <MUISx/> */}
      {/* <NavLayout>
      <Box>
        <Typography>Nav layout children content</Typography>
      </Box>
      </NavLayout> */}

      <BasicForm/>

    </div>
  );
}