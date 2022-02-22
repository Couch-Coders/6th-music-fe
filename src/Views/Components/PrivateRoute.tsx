import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { UserContext } from '../../Server/UseAuth';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  let location = useLocation();
  const { user } = useContext(UserContext);
  return user ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

export default PrivateRoute;
