"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { NotificationsList } from "@/components/dashboard/notifications-list";

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <NotificationsList />
    </DashboardLayout>
  );
} 