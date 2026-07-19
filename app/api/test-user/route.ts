import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  await connectDB();

  const count = await User.countDocuments();

  return NextResponse.json({
    success: true,
    totalUsers: count,
  });
}