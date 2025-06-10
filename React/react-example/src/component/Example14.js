"use client"

//Example14 : Using if statement in Rendering
export default function Greeting({ isLoggedIn}) {
    if(isLoggedIn) return<h1>Welcome back!</h1>;
    if(!isLoggedIn) return<h1>Please Login.</h1>;
}