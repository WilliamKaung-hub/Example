"use client"

import React, { use, useState } from "react";

export default function Person(){
    const [name, setName] = useState("Kaung Nyein kyaw");
    const [email,setEmail] = useState("kaungnyein00@gmail.com");
    const [phoneNo, setPhoneNo] = useState("09250462404");

    const onChangeEmail = (onChangeEmail) => {
        setEmail(changeEmail);
    };

    const onChangePhoneNo = (event) => {
        console.log('onChangePhoneNO', event)
        setPhoneNo(event.target.value);
    };

    const onClickButton = () => {
        alert("Button 1 clicked");
    };

    const onClickButton2 = () => {
        alert("Button 2 Clicked");
    };

    return(
        <div>
            <h1>Event in Functional Component</h1>
            <input
            value={name}
            placeholder="Enter Name"
            onChange={(Event) => setName(Event.target.value)}
            />

            <input
            value={email}
            placeholder="Enter Email"
            onChange={(avent) => onChangeEmail(avent.target.value)}
            />

            <input
                value={phoneNo}
                placeholder="Enter Phone No"
                onChange={onChangePhoneNo}
            />

            <button onClick={onClickButton}>Button 1</button>
            <button onClick={()=> onClickButton2()}>Button 2</button>
        </div>
    )

}