"use client"

import { Button, Typography } from '@mui/material'
import { useSearchParams ,useRouter} from 'next/navigation';

import React from 'react'

export default function dashboard() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const filter  = searchParams.get("filter");   
    
    const setFilter =(value) =>{
        router.push(`/dashboard?filter=${value}`);
    }
    console.log("filter",filter);
  return (
    <div>
      <Typography>Current Filter: </Typography>
      <Button onClick={()=>setFilter("active")}>Active</Button>
      <Button onClick={()=>setFilter("achive")}>Achive</Button>
    </div>
  );
}
