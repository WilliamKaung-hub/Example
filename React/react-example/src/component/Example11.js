"use client";

import { useState } from "react";

function Card(props) {
  return <div>{props.children}</div>;
}

function Heading(text) {
  console.log("Heading Render");
  return <div>{text}</div>
}
function Parent() {
  const [headingText, setHeadingText] = useState("");
  return (
    <div>
      <Card>
        <input
          value={headingText}
          onChange={(e) => setHeadingText(e.target.value)}
        />
        <Heading text={headingText} />
        <h2>Welcome</h2>
        <p>This is inside the card</p>
      </Card>

      <Card>
        <h3>User Profile</h3>
        <ul>
          <li>Name : Alice</li>
          <li>Age : 25</li>
        </ul>
      </Card>
    </div>
  );
}
export default Parent;
