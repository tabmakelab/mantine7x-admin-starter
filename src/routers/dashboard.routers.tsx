import DashboardLayout from '@/layouts/dashboard';
 import { RouteObjectWithMeta } from '@/types/app';
import dashboardPages from '../pages/dashboard';

export const dashboardRouters: RouteObjectWithMeta[] = [
  {
    path: '/dashboard/stats',
    element: (
      <DashboardLayout>
        <dashboardPages.DashStatsPage />
      </DashboardLayout>
    ),
  },
  {
    path: '/dashboard/workbench',
    element: (
      <DashboardLayout>
        <dashboardPages.DashWorkbenchPage />
      </DashboardLayout>
    ),
  },
];
