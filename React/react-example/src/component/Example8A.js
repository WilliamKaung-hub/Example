"use client";

function Greeting(props) {
  const { name, age } = props.users;
  return (
    <h2>
      Hello, {name}! You are {age} years old.
    </h2>
  );
}
//Example8: Passing an Object as a Prop
function Parent() {
  const user1 = { name: "Alice", age: 25 };
  const user2 = { name: "B0b", age: 35 };
  return (
    <div>
      <Greeting users={user1} />
      <Greeting users={user2} />
    </div>
  );
}
export default Parent;
