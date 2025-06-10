"use client"

//Example19 : Short-circuiting with || (fallbacl Rendering)

export default function Username({name}){
    return(
        <p>Hello ,{name || "guest"}</p>
    )
}