"use client";

import BasicForm from "@/components/BasicForm/BasicForm";
import ContactForm from "@/components/ContactForm/ContactForm";
import ToDoList from "@/components/ToDoList/ToDoList";

export default function Home() {
  return (
    <div>
      <BasicForm/>
      <ContactForm/>
      <ToDoList />
    </div>
  );
}
