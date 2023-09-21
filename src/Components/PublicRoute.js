import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PublicRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.login.loginState);
  return <>{!isAuth ? children : <Navigate to="/" replace />}</>;
};

export default PublicRoute;
