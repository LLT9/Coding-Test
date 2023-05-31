import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/login-redux/login.js";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const loginHandler = () => {
    if (username == "admin" && password == "Admin&8181") {
      dispatch(login());
      navigate("/profile");
    }
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>{t("Username")}</Form.Label>
          <Form.Control
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="username"
            placeholder={t("Enter username")}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{t("Password")}</Form.Label>
          <Form.Control
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder={t("Enter password")}
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
          {t("Login")}
        </Button>
      </Form>
    </>
  );
}
export default Login;
