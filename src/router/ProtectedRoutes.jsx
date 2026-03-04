import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isConnected } = useAuth();  

  if (!isConnected) {
    return <Navigate to="/connect-metamask" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
