"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { ReportsList } from "@/components/dashboard/reports-list";

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <ReportsList />
    </DashboardLayout>
  );
} 