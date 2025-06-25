import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const books = await prisma.book.findMany();
      
  return NextResponse.json(books);
}

export async function POST(req) {
  const BookData = await req.json();
  
  return NextResponse.json({
    message: "Books is successfully created.",
    BookData
  });
}

