"use client";

import { useAuth } from "@/lib/auth-context";
import Link from "next/link";
import {
  User,
  FileText,
  Calendar,
  Bell,
  Shield,
  BookOpen,
  Users,
  Heart,
} from "lucide-react";

export function DashboardOverview() {
  const { user } = useAuth();

  const dashboardItems = [
    {
      title: "Profile",
      description: "View and edit your profile information",
      icon: <User className="h-8 w-8 text-primary-600" />,
      link: "/profile",
      color: "bg-primary-100 dark:bg-primary-900/30",
    },
    {
      title: "My Activities",
      description: "Track your volunteer activities and contributions",
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      link: "/dashboard/activities",
      color: "bg-primary-100 dark:bg-primary-900/30",
    },
    {
      title: "My Reports",
      description: "View and manage your submitted reports",
      icon: <FileText className="h-8 w-8 text-primary-600" />,
      link: "/dashboard/reports",
      color: "bg-primary-100 dark:bg-primary-900/30",
    },
    {
      title: "Notifications",
      description: "Check your latest notifications and alerts",
      icon: <Bell className="h-8 w-8 text-primary-600" />,
      link: "/dashboard/notifications",
      color: "bg-primary-100 dark:bg-primary-900/30",
    },
    {
      title: "Training Programs",
      description: "Access your enrolled training programs",
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      link: "/dashboard/training",
      color: "bg-primary-100 dark:bg-primary-900/30",
    },
    {
      title: "Security Settings",
      description: "Manage your account security settings",
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      link: "/dashboard/security",
      color: "bg-primary-100 dark:bg-primary-900/30",
    },
    {
      title: "My Team",
      description: "View and manage your team members",
      icon: <Users className="h-8 w-8 text-primary-600" />,
      link: "/dashboard/team",
      color: "bg-primary-100 dark:bg-primary-900/30",
    },
    {
      title: "Donations",
      description: "Track your donations and impact",
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      link: "/dashboard/donations",
      color: "bg-primary-100 dark:bg-primary-900/30",
    },
  ];

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back, {user?.name}!
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Access your dashboard to manage your activities and contributions.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Active Projects
              </h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                3
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
              <FileText className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Reports Submitted
              </h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                12
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
              <Heart className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Contributions
              </h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                ₹5,000
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
          >
            <div className="p-6">
              <div
                className={`${item.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/volunteer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Find Opportunities
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Get Support
        </Link>
      </div>
    </div>
  );
}