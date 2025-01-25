/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import Loading from "../shared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useContext(authContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
