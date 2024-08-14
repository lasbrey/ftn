'use client'
import { useRouter } from 'next/navigation';
import { UserAuth } from '../context/authContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  const router = useRouter();

  if (!user) {
    router.push('/login');
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
