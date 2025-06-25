import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma";

//Get student list API { NextResponse } from "next/server";

export async function GET() {
  const students = await prisma.student.findMany();
  return NextResponse.json(students);
}

// Assuming you already have this defined
//Validation Schema to validate clinet request.

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  father_name: yup.string().required("Father name is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required"),
  phone: yup.string().required("Phone number is requied"),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Invalid Gender"),
  address: yup.string().required("Address is required"),
  dob:yup.date().required("DOB is required"),
  major: yup.string().required("Major is required"),
});
//Create Student API
export async function POST(req) {
  try {
    const body = await req.json(); // Get requested body data from client. 
    const validatedData = await schema.validate(body, { abortEarly: false ,});//call validation
    const student = await prisma.student.create({
      data : validatedData,
    })
    console.log(body);

    return NextResponse.json({
      message: "Student is successfully created.",
      student:student,
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
