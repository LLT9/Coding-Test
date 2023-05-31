import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/login-redux/login.js";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {

    if (username == "admin" && password == "Admin&8181") {
      dispatch(login());
      console.log("success");
      navigate("/profile");
    }
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="username"
            placeholder="Enter username"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter password"
          ></Form.Control>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            loginHandler();
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
export default Login;
