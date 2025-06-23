import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  redirectPath = '/'
}) => {
  const { currentUser, userRole } = useAuth();
  const location = useLocation();

  // If not logged in, redirect to login page
  if (!currentUser) {
    // Redirect to the login page with a return url
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // If user has conversational role, ensure they only access appropriate pages
  if (userRole === 'conversational') {
    // Allow access to conversational page, knowledge pages, chatbot pages, and conversation analyser
    const allowedPaths = ['/conversational', '/knowledge', '/components/chatbot', '/conversation/analyser'];
    
    // Check if the current path is allowed for conversational users
    const isAllowedPath = allowedPaths.some(path => location.pathname.startsWith(path));
    
    // If not an allowed path, redirect to the conversational page
    if (!isAllowedPath) {
      return <Navigate to="/conversational" replace />;
    }
  }

  // If user has demo role and is trying to access a restricted page, redirect to home
  if (userRole === 'demo' && (location.pathname.includes('/knowledge') || location.pathname.includes('/conversational'))) {
    return <Navigate to="/home" replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
