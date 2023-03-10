import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { SIGN_IN, SIGN_OUT } from '../../redux/reducer'
import "./signIn.scss";

import data from "./userData.json";

const SignIn = ({ userData, setUserData }) => {
  const navigate = useNavigate();
  const [userInput, setInput] = useState({ account: "", password: "" });
  const [warn, setWarn] = useState("");
  const { t } = useTranslation();

  //Regex
  const accountRegex = /[^a-z0-9]/;
  const passwordRegex = /[^A-za-z0-9\s*\-^%$#!&/]/;

  const accountIsValid = () => {
    if (!accountRegex.test(userInput.account)) return "valid";
    if (userInput.account.length > 0) return "invalid";
  };
  const passwordIsValid = () => {
    if (!passwordRegex.test(userInput.password)) return "valid";
    if (userInput.password.length > 0) return "invalid";
  };

  function signIn() {
    //若user輸入符合規範就送出request
    if (accountIsValid() === "valid" && passwordIsValid() === "valid") {
      const url = "api";
      let someKindOfFetch = (url, userInput) => {
        //後端確認帳密，並回傳用戶資料
        if (
          userInput.account === "admin" &&
          userInput.password === "Admin&8181"
        ) {
          return new Promise((resolve, reject) => {
            resolve(data);
          });
        }

        setWarn("error");
      };
      someKindOfFetch(url, userInput)
        //一般fetch需轉譯json檔
        //.then((res)=>{return res.json()})
        .then((res) => {
          setUserData(res);
          return res;
        })
        .then((res) => {
          navigate("/userProfile");
        })
        .catch((error) => console.error("Error:", error));
      return;
    }

    //user輸入不符合規範則跳出提示
    setWarn("reject");
  }

  useEffect(() => {
    (function isSignIn() {
      userData.token ? navigate("../userProfile") : console.log("尚未登入");
    })();
  }, []);

  return (
    <div id="singInContainer" className="container">
      <div className="inputContainer">
        <label htmlFor="account">{t("signInPage.account")}</label>
        <input
          id="account"
          type="text"
          onChange={(e) => setInput({ ...userInput, account: e.target.value })}
        />
        <div className={`${accountIsValid()} warn`}>
          <p>{t("signInPage.accountWarn1")}</p>
          <p>{t("signInPage.accountWarn2")}</p>
        </div>
      </div>
      <div className="inputContainer">
        <label htmlFor="password">{t("signInPage.password")}</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setInput({ ...userInput, password: e.target.value })}
        />
        <div className={`${passwordIsValid()} warn`}>
          <p>{t("signInPage.passwordWarn1")}</p>
          <p>{t("signInPage.passwordWarn2")}</p>
        </div>
      </div>

      <div>
        <h2
          className={`reject ${warn === "reject" ? "warnShow" : ""}`}
          onAnimationEnd={() => setWarn("")}
        >
          {t("signInPage.reject")}
        </h2>
        <h2
          className={`reject ${warn === "error" ? "warnShow" : ""}`}
          onAnimationEnd={() => setWarn("")}
        >
          {t("signInPage.fail")}
        </h2>
      </div>

      <button className="link" onClick={signIn}>
        {t("signInPage.signin")}
      </button>
    </div>
  );
};

export default SignIn;
