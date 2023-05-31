import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const loginState = useSelector((state) => state.login);
  if (loginState.token) {
    return children;
  } else return <Navigate to="/login" replace />;
}
export default PrivateRoute;
