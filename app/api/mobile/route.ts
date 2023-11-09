import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const where: any = {};
  if (!!req.nextUrl.searchParams.get("model")) {
    where.model = req.nextUrl.searchParams.get("model");
  }
  if (!!req.nextUrl.searchParams.get("storage")) {
    where.storage = Number(req.nextUrl.searchParams.get("storage"));
  }
  try {
    const groups = await db.mobile.findMany({ where: where });
    return NextResponse.json(groups);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  const requestBody = await req.json();
  const body = {
    model: requestBody.model,
    storage: requestBody.storage,
    brand: requestBody.brand,
    price: requestBody.price,
    imageUrl: requestBody.imageUrl,
    quality: requestBody.quality,
  };
  try {
    const groups = await db.mobile.create({
      data: body,
    });
    return NextResponse.json(groups);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "create user failed" }, { status: 400 });
  }
}
