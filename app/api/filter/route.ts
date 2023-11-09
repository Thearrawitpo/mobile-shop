import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const models = await db.mobile.groupBy({
      by: "model",
    });
    const storages = await db.mobile.groupBy({
      by: "storage",
    });
    return NextResponse.json({ models: models, storages: storages });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
