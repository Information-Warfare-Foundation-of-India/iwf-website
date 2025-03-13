import { NextRequest, NextResponse } from "next/server";

// Mock user database - in a real app, this would be a database
// This is just for demonstration purposes
const users = [
  {
    id: "user-123",
    name: "Test User",
    email: "test@example.com",
    password: "password123",
    role: "user",
  },
];

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    if (users.some((u) => u.email === email)) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Create new user
    const newUser = {
      id: "user-" + Math.random().toString(36).substring(2, 11),
      name,
      email,
      password, // In a real app, this would be hashed
      role: "user" as const,
    };

    // Add user to mock database
    users.push(newUser);

    // Create user object without password
    const { password: _, ...userWithoutPassword } = newUser;

    // In a real app, you would generate a JWT token here
    return NextResponse.json({
      user: userWithoutPassword,
      token: "mock-jwt-token",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 