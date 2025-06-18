import { NextResponse } from "next/server";
import * as yup from "yup";
//Validation Schema to validate clinet request.
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  fathername: yup.string().required("Father name is required"),
  address: yup.string().required("Address is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required"),
  major: yup.string().required("Major is required"),
});
//Update student API
export async function PUT(req, { params }) {
  try {
    const StudentId = params.id; //get URI params field
    const body = await req.json();
    await schema.validate(body, { abortEarly: false });
    return NextResponse.json({
      message: "Student is Successfully updated.",
      StudentId,
      bodyData: body,
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
    }
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
export async function DELETE(req, { params }) {
  const StudentId = params.id;

  return NextResponse.json({
    message: "Student is successfully deleted,",
    StudentId,
  });
}
export async function GET(req, { params }) {
  const StudentId = params.id;

  const student = {
    id: StudentId,
    name: "Kaung Kaung",
    age: 14,
    fathername: "U Kyaw Kyaw",
    address: "Hledan",
    major: "Computer Science",
  };
  return NextResponse.json(student);
}
