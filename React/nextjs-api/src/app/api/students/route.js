import { NextResponse } from "next/server";

const StudentData = [
  {
    id: 1,
    name: "Kaung Nyein",
    age: 25,
    address: "Tarmwe",
    major: "CS",
  },
  {
    id: 2,
    name: "Kaung Kyaw",
    age: 22,
    address: "Tarmwe",
    major: "CT",
  },
];

export async function GET() {
  return NextResponse.json(StudentData);
}

export async function POST(req) {
  const body = await req.json();
  console.log(body);

  return NextResponse.json({ message: "Stundent is successfully created.",bodyData: body, });

}
