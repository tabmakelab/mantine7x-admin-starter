import { Navigate } from 'react-router-dom';
import { RouteObjectWithMeta } from './RouteObjectExtra';
import { dashboardRouters } from './dashboard.routers';
import { SignInPage } from '../pages/auth/SignIn';
import { SignUpPage } from '@/pages/auth/SignUp';

const routes: RouteObjectWithMeta[] = [
  {
    path: '/',
    element: <Navigate to="/dashboard/stats" />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  ...dashboardRouters,
  {
    path: '/*',
    element: <Navigate to="/404" />,
  },
];
export default routes;
