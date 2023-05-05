import React, { useRef, useState } from "react";
import "./SignUpScreen.css";
import { authenticateAccountAndPassword } from "../APIs.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { useTranslation } from "react-i18next";

function SignUpScreen() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const [loginError, SetLoginError] = useState("");
  const passwordRef = useRef(null);
  const [defaultAccount, setDefaultAccount] = useState("admin");
  const [defaultPassword, setDefaultPassword] = useState("Admin&8181");

  async function signIn(e) {
    e.preventDefault();
    const ValidationResult = await authenticateAccountAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    );
    if (ValidationResult.isAuthenticated) {
      dispatch(
        login({
          email: ValidationResult.email,
          uid: ValidationResult.uid,
        })
      );
      SetLoginError(() => "");
      navigate("/");
    }

    if (!ValidationResult.isAuthenticated) {
      SetLoginError(() => "login failed");
    }
  }

  return (
    <div className="signupScreen">
      <form>
        <h1>{t("Sign In")}</h1>
        <input
          ref={emailRef}
          placeholder="Email"
          type="email"
          value={defaultAccount}
          onChange={(e) => setDefaultAccount(e.target.value)}
        ></input>
        <input
          ref={passwordRef}
          placeholder="Password"
          type="password"
          value={defaultPassword}
          onChange={(e) => setDefaultPassword(e.target.value)}
        ></input>
        <button type="submit" onClick={(e) => signIn(e)}>
          {t("Sign In")}
        </button>
        <h4>
          <span className="signupScreen_gray">{t("New to Netflix?")} </span>
          <span className="signupScreen_link">{t("Sign Up now.")}</span>
        </h4>
        <div className="signupScreen_error">{t(loginError)}</div>
      </form>
    </div>
  );
}

export default SignUpScreen;
