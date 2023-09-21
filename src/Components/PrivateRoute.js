import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.login.loginState);
  return <>{isAuth ? children : <Navigate to="/" replace />}</>;
};

export default PrivateRoute;
