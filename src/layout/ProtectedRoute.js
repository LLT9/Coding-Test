import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectAuth } from "../redux/auth";
import { useSelector } from 'react-redux'

const ProtectedRoute = (props) => {
  const auth = useSelector(selectAuth);

  const navigate = useNavigate();

  // if the auth state is false, we redirect to the login page
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);

  // when we vertify the jwt token, everything are correct
  return <>{props.children}</>;
};
export default ProtectedRoute;
