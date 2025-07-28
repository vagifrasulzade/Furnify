import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Layout  from './dashboard/Layout';

export default function AdminLayout() {
const { currentUser, isAuthenticated } = useAuth();

  const isAdmin = currentUser?.email === 'admin@example.com';

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <>
    <Layout/>
    </>
  );
}
