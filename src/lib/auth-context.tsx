"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "volunteer" | "donor" | "researcher" | "admin";
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
  socialLogin: (provider: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Only access localStorage in browser environment
        if (typeof window !== "undefined") {
          const token = localStorage.getItem("iwf_token");
          if (token) {
            // Fetch user data from API
            const response = await fetch("/api/auth/me", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            if (response.ok) {
              const data = await response.json();
              setUser(data.user);
            } else {
              // If token is invalid, clear it
              localStorage.removeItem("iwf_token");
            }
          }
        }
      } catch (error) {
        console.error("Authentication error:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }

      const data = await response.json();
      
      // Store token in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("iwf_token", data.token);
      }
      
      setUser(data.user);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("iwf_token");
    }
    setUser(null);
  };

  // Register function
  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed");
      }

      const data = await response.json();
      
      // Store token in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("iwf_token", data.token);
      }
      
      setUser(data.user);
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Social login function
  const socialLogin = async (provider: string) => {
    setLoading(true);
    try {
      // Open a popup window for OAuth flow
      const width = 600;
      const height = 600;
      const left = window.innerWidth / 2 - width / 2;
      const top = window.innerHeight / 2 - height / 2;
      
      const popup = window.open(
        `/api/auth/${provider}`,
        `${provider}Auth`,
        `width=${width},height=${height},left=${left},top=${top}`
      );
      
      if (!popup) {
        throw new Error("Could not open popup window. Please check your popup blocker settings.");
      }
      
      // Create a promise that resolves when the popup sends a message
      const authResult = await new Promise<{ token: string; user: User }>((resolve, reject) => {
        // Listen for messages from the popup
        const handleMessage = (event: MessageEvent) => {
          // Verify origin for security
          if (event.origin !== window.location.origin) return;
          
          if (event.data.type === "auth_success") {
            window.removeEventListener("message", handleMessage);
            resolve(event.data.authData);
          } else if (event.data.type === "auth_error") {
            window.removeEventListener("message", handleMessage);
            reject(new Error(event.data.error || `${provider} authentication failed`));
          }
        };
        
        window.addEventListener("message", handleMessage);
        
        // Handle popup being closed without completing auth
        const checkClosed = setInterval(() => {
          if (popup.closed) {
            clearInterval(checkClosed);
            window.removeEventListener("message", handleMessage);
            reject(new Error("Authentication was cancelled"));
          }
        }, 1000);
      });
      
      // Store token in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("iwf_token", authResult.token);
      }
      
      setUser(authResult.user);
    } catch (error) {
      console.error(`${provider} login error:`, error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register, socialLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
} 