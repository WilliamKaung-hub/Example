import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as yup from "yup";
const schema = yup.object().shape({
  title: yup.string().required("Name is required"),
  author: yup.string().required("Author name is required"),
  published_year: yup
    .number()
    .typeError("Year must be a number")
    .required("Year is required"),
});

export async function GET() {
  const books = await prisma.book.findMany();
      
  return NextResponse.json(books);
}


//Create Book API
export async function POST(req) {
  try {
    const body = await req.json(); // Get requested body data from client. 
    const validatedData = await schema.validate(body, { abortEarly: false ,});//call validation
    const book = await prisma.book.create({
      data : validatedData,
    })
    console.log(body);

    return NextResponse.json({
      message: "Books is successfully created.",
      book: book,
      //bodyData: body,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          message: "Validation failed",
          error: error.inner.map((e) => ({
            path: e.path,
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Unexpected Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

