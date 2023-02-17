import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { selectAuth } from "../redux/auth";
import { useSelector, useDispatch } from "react-redux";
import { changeAuthState } from "../redux/auth";
import ChangeLangSelect from "../component/ChangeLangSelect";
const LoginPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const auth = useSelector(selectAuth); // to know the user login or not

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [status, setStatus] = useState("idle"); // login status

  const navigate = useNavigate();

  // go to main page when we detect the user already login
  useEffect(() => {
    if (auth) {
      navigate("/main");
    }
  }, [auth, navigate]);

  // if the user enter correct account and password, we set auth state to true
  const handleLogin = (event) => {
    event.preventDefault();
    setStatus("pending");

    if (usernameRef.current !== null && passwordRef.current !== null) {
      if (
        usernameRef.current.value === "admin" &&
        passwordRef.current.value === "Admin&amp;8181"
      ) {
        setStatus("idle");
        dispatch(changeAuthState()); // set the auth state to true
        navigate("/main"); // then go to main page
      } else {
        setStatus("error");
      }
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{t('login_page')}</h1>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: 13,
        }}
      >
        <label>
          {t('name')}:
          <input type="text" name="name" ref={usernameRef} required />
        </label>
        <label>
        {t('password')}:
          <input type="password" name="password" ref={passwordRef} required />
        </label>

        <button type="submit" value="Submit">
          {t('login')}
        </button>
      </form>
      {status === "error" && <h6>{t('incorrect_pw_username')}</h6>}
      <ChangeLangSelect/>
    </div>
  );
};
export default LoginPage;
