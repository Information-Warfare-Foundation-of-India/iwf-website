"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <MainLayout>
      <section className="py-20 bg-gradient-to-r from-[#800020] to-[#600010] min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-t-lg overflow-hidden">
              <div className="flex">
                <button
                  className={`flex-1 py-4 text-center font-medium ${
                    activeTab === "login"
                      ? "bg-white dark:bg-gray-800 text-[#800020] dark:text-[#800020]"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }`}
                  onClick={() => setActiveTab("login")}
                >
                  Sign In
                </button>
                <button
                  className={`flex-1 py-4 text-center font-medium ${
                    activeTab === "register"
                      ? "bg-white dark:bg-gray-800 text-[#800020] dark:text-[#800020]"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }`}
                  onClick={() => setActiveTab("register")}
                >
                  Create Account
                </button>
              </div>
            </div>

            {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 