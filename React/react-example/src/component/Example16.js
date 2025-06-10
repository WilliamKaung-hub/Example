"use client"

//Example : Using the logical operator (&&) in Rendering

export default function Notification(hasMessage){
    return(
        <div>
            <h1>DashBoard</h1>
            {hasMessage &&<p>You have new message</p>}
        </div>
    );
}