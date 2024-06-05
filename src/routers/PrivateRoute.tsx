import { Navigate } from 'react-router-dom';
import useAppState from '../store';

const useAuth = () => {
  if (!useAppState.getState().token) {
    return false;
  }

  return true;
};

export const PrivateRoute = ({ children }: any) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/auth/login" />;
};
