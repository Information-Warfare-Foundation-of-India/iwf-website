"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { ActivitiesList } from "@/components/dashboard/activities-list";

export default function ActivitiesPage() {
  return (
    <DashboardLayout>
      <ActivitiesList />
    </DashboardLayout>
  );
} 