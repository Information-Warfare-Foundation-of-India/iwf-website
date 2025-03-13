import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/register-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register - Information Warfare Foundation of India",
  description: "Create an account with IWF to access exclusive resources and join our community.",
};

export default function RegisterPage() {
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
            Create your account to join our community
          </p>
        </div>
        
        <RegisterForm />
      </div>
    </div>
  );
} 