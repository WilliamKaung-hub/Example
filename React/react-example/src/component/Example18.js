"use client"

//Example18 : Using Conditional Rendering with Component

function LoggedView () {
    return<h1>Welcome Back!</h1>
}
function LoggedOutView () {
    return<h1>Please Login!</h1>
}

export default function Greeting({isLoggedIn}){
    return isLoggedIn ?<LoggedView/> : <LoggedOutView/>;
}