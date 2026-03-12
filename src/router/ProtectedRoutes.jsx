import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { address } = useAuth();  
  return address ? children : <Navigate to="/connect-metamask" state={{ from: location }} replace />;
};

export default ProtectedRoute;
