"use client"

import React from "react";

//Example : Event in class Component

export default class Person extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : "Mg Kaung",
            email : "kaungnyein@gmail.com",
            phoneNo: "09882282855",
            address:"Yangon",
        };
        
        this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
    }

        onChangeEmail(changeEmail){
            this.setState({email : changeEmail});
        }

        onChangePhoneNo(event){
            this.setState({ phoneNo : event.target.value});
        }

        onClickButton(){
            alert("Button 1 Clicked");
        }

          onClickButton2(){
            alert("Button 2 Clicked");
        }

        render(){
            return(
                <div>
                    <h1>Event in class Component</h1>
                    <input
                    value ={this.state.name}
                    placeholder ="Enter Name"
                    onChange={(event)=>{
                        this.setState({name : event.target.value})
                    }}
                    />

                    <input
                    value={this.state.email}
                    placeholder="Enter Email"
                    onChange={(event)=>
                        this.onChangeEmail(event.target.value)
                    }
                    />
                    <input
                    value={this.state.phoneNo}
                    placeholder="Enter Phone Number"
                    onChange={this.onChangePhoneNo}
                    />

                    <button onClick={this.onClickButton}>Button 1</button>
                    <button onClick={()=> this.onClickButton2}>Button 2</button>
                    
                </div>
            )
        }
}