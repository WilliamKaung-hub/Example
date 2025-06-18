import { NextResponse } from "next/server";
import * as yup from "yup";

// Assuming you already have this defined
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
//Create Student API
export async function POST(req) {
  try {
    const body = await req.json(); // Get requested body data from client
    await schema.validate(body, { abortEarly: false });
    console.log(body);

    return NextResponse.json({
      message: "Student is successfully created.",
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
