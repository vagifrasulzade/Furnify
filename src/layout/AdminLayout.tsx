import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Layout  from './dashboard/Layout';

export default function AdminLayout() {
const { currentUser, isAuthenticated } = useAuth();

  // Check if user is admin
  const isAdmin = currentUser?.email === 'admin@example.com';

  // Redirect if not authenticated or not admin
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <>
    <Layout/>
    </>
  );
}
