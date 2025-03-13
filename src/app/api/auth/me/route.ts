import { NextRequest, NextResponse } from "next/server";

// Mock user database - in a real app, this would be a database
const users = [
  {
    id: "user-123",
    name: "Test User",
    email: "test@example.com",
    password: "password123",
    role: "user",
  },
  {
    id: "admin-456",
    name: "Admin User",
    email: "admin@iwf.org.in",
    password: "admin123",
    role: "admin",
  },
];

export async function GET(request: NextRequest) {
  try {
    // In a real app, you would verify the JWT token from the Authorization header
    // and get the user ID from the token
    const authHeader = request.headers.get("Authorization");
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Extract token
    const token = authHeader.split(" ")[1];
    
    // In a real app, you would verify the token and extract the user ID
    // For this mock implementation, we'll just return the first user
    if (token !== "mock-jwt-token") {
      return NextResponse.json(
        { error: "Invalid token" },
        { status: 401 }
      );
    }

    // Get user from mock database
    const user = users[0];
    
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Create user object without password
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ user: userWithoutPassword });
  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 