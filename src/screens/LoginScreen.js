import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
import { useTranslation } from "react-i18next";
import LanguageBtns from "../LanguageBtns";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/netflix.svg"
          alt="logo"
        ></img>
      </div>
      <button className="loginScreen_button" onClick={() => setSignIn(true)}>
        {t("Sign In")}
      </button>
      <div className="loginScreen_languageBtns">
        <LanguageBtns></LanguageBtns>
      </div>
      <div className="loginScreen_gradient"></div>

      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen></SignUpScreen>
        ) : (
          <>
            <h1>{t("Unlimited films, TV programmes and more.")}</h1>
            <h2>{t("Watch anywhere. Cancel at any time.")}</h2>
            <h3>
              {t(
                "Ready to watch? Enter your email to create or restart your membership."
              )}
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder={t("Email Address")}></input>
                <button
                  className="loginScreen_getStarted"
                  onClick={() => setSignIn(true)}
                >
                  {t("Get Started")}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
