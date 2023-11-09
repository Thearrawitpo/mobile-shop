import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const groups = await db.mobile.findUnique({ where: { id: params.id } });
    return NextResponse.json(groups);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "not allow" }, { status: 400 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const requestBody = await req.json();
  const body = requestBody;

  try {
    const groups = await db.mobile.update({
      where: { id: params.id },
      data: body,
    });
    return NextResponse.json(groups);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "update failed" }, { status: 400 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const groups = await db.mobile.delete({
      where: { id: params.id },
    });
    return NextResponse.json(groups);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "delete failed" }, { status: 400 });
  }
}
