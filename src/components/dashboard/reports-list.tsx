"use client";

import { useState } from "react";
import { FileText, Calendar, Tag, Eye, Download, Search, Filter, ChevronDown, Plus } from "lucide-react";
import Link from "next/link";

// Mock data for reports
const mockReports = [
  {
    id: 1,
    title: "Cybersecurity Threat Analysis",
    category: "Threat Analysis",
    date: "2024-11-10",
    status: "Published",
    views: 245,
    downloads: 78,
    summary: "Analysis of emerging cybersecurity threats targeting critical infrastructure in India.",
  },
  {
    id: 2,
    title: "Digital Literacy Survey Results",
    category: "Survey",
    date: "2024-11-05",
    status: "Published",
    views: 189,
    downloads: 42,
    summary: "Results and analysis of the digital literacy survey conducted across 5 states in India.",
  },
  {
    id: 3,
    title: "Information Warfare Tactics",
    category: "Research",
    date: "2024-10-28",
    status: "Under Review",
    views: 0,
    downloads: 0,
    summary: "Comprehensive research on modern information warfare tactics and countermeasures.",
  },
  {
    id: 4,
    title: "Social Media Disinformation Campaign",
    category: "Case Study",
    date: "2024-10-15",
    status: "Published",
    views: 312,
    downloads: 95,
    summary: "Case study of a disinformation campaign that targeted Indian elections through social media platforms.",
  },
  {
    id: 5,
    title: "Cybersecurity Training Effectiveness",
    category: "Evaluation",
    date: "2024-10-05",
    status: "Draft",
    views: 0,
    downloads: 0,
    summary: "Evaluation of the effectiveness of cybersecurity training programs for government employees.",
  },
];

export function ReportsList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");

  // Filter reports based on search term and filters
  const filteredReports = mockReports.filter((report) => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "All" || report.status === filterStatus;
    const matchesCategory = filterCategory === "All" || report.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Get unique report categories for filter
  const reportCategories = ["All", ...new Set(mockReports.map(report => report.category))];
  
  // Get unique statuses for filter
  const statuses = ["All", ...new Set(mockReports.map(report => report.status))];

  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Reports</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            View and manage your submitted reports and research.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link
            href="/dashboard/reports/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Report
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search reports..."
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
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="appearance-none pl-2 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              >
                {reportCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
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

      {/* Reports List */}
      <div className="space-y-6">
        {filteredReports.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">No reports found matching your criteria.</p>
          </div>
        ) : (
          filteredReports.map((report) => (
            <div
              key={report.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                    {report.title}
                  </h3>
                  <div className="flex items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        report.status === "Published"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : report.status === "Under Review"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {report.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {report.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{new Date(report.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Tag className="h-5 w-5 mr-2" />
                    <span>{report.category}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Eye className="h-5 w-5 mr-2" />
                    <span>{report.views} views</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Download className="h-5 w-5 mr-2" />
                    <span>{report.downloads} downloads</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                  <Link
                    href={`/dashboard/reports/${report.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-primary-50 hover:bg-primary-100 dark:bg-primary-900/20 dark:hover:bg-primary-900/30 dark:text-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    View Report
                  </Link>
                  {report.status === "Published" && (
                    <Link
                      href={`/dashboard/reports/${report.id}/download`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 