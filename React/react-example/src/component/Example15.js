"use client"

//Eample 15 : Using the ternary Operator(? :) 
export default function Greeting({isLoggedIn}){
    return isLoggedIn ?<h1>Welcome Back!</h1> : <h1>Please Login.</h1>;
}