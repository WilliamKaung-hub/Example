
import { NextResponse } from "next/server";
import * as yup from "yup";

import { prisma } from "@/lib/prisma";

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
//Update student API
export async function PUT(req, { params }) {
  try {
    const studentId = parseInt(params.id); //get URI params field
    const body = await req.json();
    const validateData = await schema.validate(body, { 
      abortEarly: false ,
      stripUnknown:true,
    });
    await prisma.book.update({
      where: {id: studentId},
      data : validateData,
    })

    return NextResponse.json({
      message: "Student is Successfully updated.",
      studentId  
      //bodyData: body,
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

    return NextResponse.json(
      {
        message: "Unexpected Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
//Delete Student API
export async function DELETE(req, { params }) {
  try{
  const StudentId =parseInt(params.id);
  await prisma.student.delete({
    where:{id : StudentId },
  })

  return NextResponse.json({
    message: "Student is successfully deleted,",
    StudentId,
  });
}catch(error){
  return NextResponse.json({
    message:"student not found or student deletion is fail",
    status:404,
  })
}
}

export async function GET(req, { params }) {
  const StudentId = parseInt(params.id);
  const student = await prisma.student.findUnique({
  where: {
    id: StudentId,
  }
});
  return NextResponse.json(student);
}
