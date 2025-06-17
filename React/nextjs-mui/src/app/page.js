"use client";

import ContactForm from "@/components/ContactForm/ContactForm";
import ToDoList from "@/components/ToDoList/ToDoList";

export default function Home() {
  return (
    <div>
      <ContactForm/>
      <ToDoList />
    </div>
  );
}
