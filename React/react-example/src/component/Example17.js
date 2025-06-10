"use client"

//Example 17 : Using switch Statement in Rendering

export default function statusMessage ({status}){
    switch (status){
        case "success":
            return<h1>Operation success</h1>;
        case "error":
            return<h1>Something went wrong</h1>;

            default:
                return<h1>Waiting for action..</h1>
    }
}