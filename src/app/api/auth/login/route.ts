import { NextRequest, NextResponse } from "next/server";

// Mock user database - in a real app, this would be a database
const users = [
  {
    id: "user-123",
    name: "Test User",
    email: "test@example.com",
    // In a real app, this would be hashed
    password: "password123",
    role: "user",
  },
  {
    id: "admin-456",
    name: "Admin User",
    email: "admin@iwf.org.in",
    // In a real app, this would be hashed
    password: "admin123",
    role: "admin",
  },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find user by email
    const user = users.find((u) => u.email === email);

    // Check if user exists and password matches
    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Create user object without password
    const { password: _, ...userWithoutPassword } = user;

    // In a real app, you would generate a JWT token here
    return NextResponse.json({
      user: userWithoutPassword,
      token: "mock-jwt-token",
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 