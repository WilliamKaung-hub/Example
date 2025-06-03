"use client"

import { Fugaz_One } from "next/font/google";

const h1Style = { color:"white" ,backgroundColor:"gray",padding:10};
export default function UserProfile(){
    return(
        <div>
            <h1 style={h1Style}>User Profile</h1>
            <h1 style={h1Style}>User Profile2</h1>
            <p style={{color:"blue", fontSize:20,padding:10}}>Name: KoKo</p>
        </div>
    );
}