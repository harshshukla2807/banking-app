import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import {
  generateAccountNumber,
  generateCustomerId,
} from "@/lib/account";

export async function POST(req: Request) {
  try {
    await connectDB();

    const {
      firstName,
      lastName,
      email,
      password,
      phone,
    } = await req.json();

    // Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !phone
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Check existing email
    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists.",
        },
        {
          status: 409,
        }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,

      customerId: generateCustomerId(),

      accountNumber:
        generateAccountNumber(),

      accountType: "Savings Account",

      branch: "Delhi Main Branch",

      ifsc: "HDFC0001234",

      balance: 50000,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Account created successfully.",

        user: {
          id: user._id,

          firstName: user.firstName,

          lastName: user.lastName,

          email: user.email,

          customerId: user.customerId,

          accountNumber:
            user.accountNumber,
        },
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}