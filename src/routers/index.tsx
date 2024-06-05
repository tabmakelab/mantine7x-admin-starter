import { Navigate } from 'react-router-dom';
import { RouteObjectWithMeta } from './RouteObjectExtra';
import { dashboardRouters } from './dashboard.routers';

const routes: RouteObjectWithMeta[] = [
  {
    path: '/',
    element: <Navigate to="/dashboard/stats" />,
  },
  ...dashboardRouters,
];
export default routes;
