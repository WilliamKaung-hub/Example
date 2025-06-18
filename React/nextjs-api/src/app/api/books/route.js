import { NextResponse } from "next/server";

const BookData = [
  {
    id: 1,
    book_name: "Atomic Habits",
    author: "William ",
    year: "1989",
  },
  {
    id: 2,
    book_name: "To Do List",
    author: "Henrry ",
    year: "2018",
  },
];

export async function GET() {
  return NextResponse.json(BookData);
}

export async function POST(req) {
  const BookData = await req.json();
  
  return NextResponse.json({
    message: "Books is successfully created.",
    BookData
  });
}

