import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ message: "Up and running" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}