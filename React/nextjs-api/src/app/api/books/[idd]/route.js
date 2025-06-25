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
//Update book API
export async function PUT(req, { params }) {
  try {
    const BookId =parseInt(params.idd); //get URI params field
    const body = await req.json();
    const validateData = await schema.validate(body, { 
      abortEarly: false ,
      stripUnknown:true,
    })
   const validateBook = await prisma.book.update({
          where: {id: BookId},
          data : validateData,
        })
      if(!validateBook){
        return NextResponse.json({message : "Book not found"},{status : 404})
      }
    return NextResponse.json({
      message: "Book is Successfully updated.",
      BookId,
      validateBook,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return NextResponse.json({
        message: "Validation failed",
        error: error.inner.map((e) => ({
          path: e.path,
          message: e.message,
        })),
      });
    }
  }
}

export async function DELETE(req, { params }) {
  const BookId = parseInt(params.idd)
  await prisma.book.delete({
    where:{id : StudentId },
  });

  return NextResponse.json({
    message: "Books is successfully deleted,",
    BookId,
  });
}
export async function GET( _, { params }) {
  const {idd} = params;

  const book = {
    idd,
    name: "BookIsRead",
    author:"Kaung K"
  };
  return NextResponse.json(book);
}
