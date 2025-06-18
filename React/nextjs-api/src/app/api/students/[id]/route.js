import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const StudentId = params.id;
  const body = await req.json();
  return NextResponse.json({
    message: "Student is Successfully updated.",
    StudentId,
    bodyData: body,
  });
}
    