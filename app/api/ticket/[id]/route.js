import Ticket from "@/app/{models}/Ticket";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
  try {
    const { id: _id } = params;
    const ticket = await Ticket.findOne({ _id });
    return NextResponse.json({ ticket }, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();

    await Ticket.findByIdAndUpdate(id, {
      ...body,
    });

    return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(_req, { params }) {
  try {
    const { id } = params;

    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}