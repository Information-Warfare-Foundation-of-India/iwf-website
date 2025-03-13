import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login - Information Warfare Foundation of India",
  description: "Login to your IWF account to access exclusive resources and manage your profile.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <img
              src="/images/logo.svg"
              alt="IWF Logo"
              className="h-12 mx-auto"
            />
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white">
            Information Warfare Foundation
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Login to access your account
          </p>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
}