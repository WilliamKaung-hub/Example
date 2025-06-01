"use client"

import React,{useState} from "react";

export default function Person(){
    const [name,setName] = useState("Mg Kaung Kaung");
    const [date,setDate] = useState(new Date());

    return(
        <div>
            <h1>State in Function Components</h1>
            <div>{name}</div>
            <div>{date.toString()}</div>
        </div>
    );
        

    
}