import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '@/context/AuthContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const PrivateRoute = () => {
  const { getStorageItem, removeStorageItem } = useLocalStorage();
  const { isAuthenticated } = useAuthContext();
  const isAuth = getStorageItem('isAuthenticated');

  //TODO REFACTORING AFTER
  useEffect(() => {
    if (!isAuthenticated) {
      removeStorageItem('isAuthenticated');
    }
  }, [isAuthenticated]);

  return isAuth ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
