"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Users, Filter, Search, ChevronDown } from "lucide-react";
import Link from "next/link";

// Mock data for activities
const mockActivities = [
  {
    id: 1,
    title: "Cybersecurity Workshop",
    type: "Workshop",
    date: "2024-11-15",
    time: "10:00 AM - 2:00 PM",
    location: "New Delhi, India",
    participants: 24,
    status: "Completed",
    description: "Conducted a workshop on basic cybersecurity practices for non-technical professionals.",
  },
  {
    id: 2,
    title: "Digital Literacy Campaign",
    type: "Campaign",
    date: "2024-11-20",
    time: "9:00 AM - 5:00 PM",
    location: "Mumbai, India",
    participants: 150,
    status: "Completed",
    description: "Participated in a campaign to promote digital literacy among senior citizens.",
  },
  {
    id: 3,
    title: "Information Warfare Research",
    type: "Research",
    date: "2024-11-25",
    time: "Flexible",
    location: "Remote",
    participants: 5,
    status: "In Progress",
    description: "Conducting research on emerging information warfare tactics and countermeasures.",
  },
  {
    id: 4,
    title: "Cybersecurity Conference",
    type: "Conference",
    date: "2024-12-05",
    time: "9:00 AM - 6:00 PM",
    location: "Bangalore, India",
    participants: 200,
    status: "Upcoming",
    description: "Annual cybersecurity conference focusing on the latest threats and defense strategies.",
  },
  {
    id: 5,
    title: "School Awareness Program",
    type: "Outreach",
    date: "2024-12-10",
    time: "10:00 AM - 12:00 PM",
    location: "Chennai, India",
    participants: 100,
    status: "Upcoming",
    description: "Awareness program for school students about online safety and responsible digital citizenship.",
  },
];

export function ActivitiesList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterType, setFilterType] = useState("All");

  // Filter activities based on search term and filters
  const filteredActivities = mockActivities.filter((activity) => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "All" || activity.status === filterStatus;
    const matchesType = filterType === "All" || activity.type === filterType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  // Get unique activity types for filter
  const activityTypes = ["All", ...new Set(mockActivities.map(activity => activity.type))];
  
  // Get unique statuses for filter
  const statuses = ["All", ...new Set(mockActivities.map(activity => activity.status))];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Activities</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Track and manage your volunteer activities and contributions.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search activities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-400 mr-2" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="appearance-none pl-2 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
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
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="appearance-none pl-2 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              >
                {activityTypes.map((type) => (
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
        </div>
      </div>

      {/* Activities List */}
      <div className="space-y-6">
        {filteredActivities.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">No activities found matching your criteria.</p>
          </div>
        ) : (
          filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                    {activity.title}
                  </h3>
                  <div className="flex items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        activity.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : activity.status === "In Progress"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {activity.status}
                    </span>
                    <span className="ml-3 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      {activity.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {activity.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{new Date(activity.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{activity.location}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{activity.participants} participants</span>
                </div>

                <div className="mt-6 flex justify-end">
                  <Link
                    href={`/dashboard/activities/${activity.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-primary-50 hover:bg-primary-100 dark:bg-primary-900/20 dark:hover:bg-primary-900/30 dark:text-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 