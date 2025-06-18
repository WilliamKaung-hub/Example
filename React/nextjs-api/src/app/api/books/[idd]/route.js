import { NextResponse } from "next/server";
import * as yup from "yup";
const schema = yup.object().shape({
  bookname: yup.string().required("Name is required"),
  author: yup.string().required("Author name is required"),
  year: yup
    .number()
    .typeError("Year must be a number")
    .required("Year is required"),
  genre: yup.string().required("Genre is required"),
});
export async function PUT(req, { params }) {
  try {
    const BookId = params.id; //get URI params field
    const body = await req.json();
    await schema.validate(body, { abortEarly: false });
    return NextResponse.json({
      message: "Book is Successfully updated.",
      BookId,
      bodyData: body,
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
  const BookId = params.id;

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
