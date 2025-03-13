"use client";

import { useState } from "react";
import { Bell, Calendar, Check, AlertTriangle, Info, FileText, User, Filter, ChevronDown } from "lucide-react";

// Mock data for notifications
const mockNotifications = [
  {
    id: 1,
    title: "Your report has been published",
    message: "Your report 'Cybersecurity Threat Analysis' has been reviewed and published.",
    date: "2024-11-12T10:30:00",
    type: "Report",
    read: false,
    priority: "Normal",
  },
  {
    id: 2,
    title: "New volunteer opportunity",
    message: "A new volunteer opportunity matching your skills is available: 'Digital Literacy Workshop'.",
    date: "2024-11-11T14:45:00",
    type: "Opportunity",
    read: true,
    priority: "Normal",
  },
  {
    id: 3,
    title: "Security alert",
    message: "We detected a login attempt from an unrecognized device. Please verify if it was you.",
    date: "2024-11-10T08:15:00",
    type: "Security",
    read: false,
    priority: "High",
  },
  {
    id: 4,
    title: "Training completion certificate",
    message: "Your certificate for completing 'Advanced Information Warfare' training is now available.",
    date: "2024-11-08T16:20:00",
    type: "Training",
    read: true,
    priority: "Normal",
  },
  {
    id: 5,
    title: "Profile update reminder",
    message: "Please update your profile information to ensure we have your latest contact details.",
    date: "2024-11-05T11:00:00",
    type: "Account",
    read: false,
    priority: "Low",
  },
  {
    id: 6,
    title: "New comment on your report",
    message: "Admin has commented on your report 'Digital Literacy Survey Results'.",
    date: "2024-11-03T09:30:00",
    type: "Report",
    read: true,
    priority: "Normal",
  },
  {
    id: 7,
    title: "Upcoming event reminder",
    message: "Reminder: You are registered for 'Cybersecurity Conference' on December 5, 2024.",
    date: "2024-11-01T13:15:00",
    type: "Event",
    read: false,
    priority: "Normal",
  },
];

export function NotificationsList() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filterType, setFilterType] = useState("All");
  const [filterRead, setFilterRead] = useState("All");

  // Filter notifications based on filters
  const filteredNotifications = notifications.filter((notification) => {
    const matchesType = filterType === "All" || notification.type === filterType;
    const matchesRead = filterRead === "All" || 
                       (filterRead === "Read" && notification.read) || 
                       (filterRead === "Unread" && !notification.read);
    
    return matchesType && matchesRead;
  });

  // Get unique notification types for filter
  const notificationTypes = ["All", ...new Set(notifications.map(notification => notification.type))];

  // Mark notification as read
  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  // Get icon based on notification type
  const getIcon = (type: string) => {
    switch (type) {
      case "Report":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "Security":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case "Training":
        return <User className="h-5 w-5 text-green-500" />;
      case "Account":
        return <User className="h-5 w-5 text-purple-500" />;
      case "Event":
        return <Calendar className="h-5 w-5 text-yellow-500" />;
      case "Opportunity":
        return <Info className="h-5 w-5 text-indigo-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Notifications</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Stay updated with the latest alerts, messages, and updates.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            onClick={markAllAsRead}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-primary-50 hover:bg-primary-100 dark:bg-primary-900/20 dark:hover:bg-primary-900/30 dark:text-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <Check className="h-4 w-4 mr-2" />
            Mark All as Read
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative">
          <div className="flex items-center">
            <Filter className="h-5 w-5 text-gray-400 mr-2" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="appearance-none pl-2 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            >
              {notificationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center">
            <select
              value={filterRead}
              onChange={(e) => setFilterRead(e.target.value)}
              className="appearance-none pl-2 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="All">All</option>
              <option value="Read">Read</option>
              <option value="Unread">Unread</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">No notifications found matching your criteria.</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border ${
                notification.read
                  ? "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  : "bg-primary-50 dark:bg-primary-900/10 border-primary-200 dark:border-primary-900/20"
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  {getIcon(notification.type)}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <p className={`text-sm font-medium ${notification.read ? "text-gray-900 dark:text-white" : "text-primary-800 dark:text-primary-200"}`}>
                      {notification.title}
                    </p>
                    <p className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(notification.date)}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {notification.message}
                  </p>
                  <div className="mt-2 flex items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      {notification.type}
                    </span>
                    {notification.priority === "High" && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                        High Priority
                      </span>
                    )}
                    {!notification.read && (
                      <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400">
                        New
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 