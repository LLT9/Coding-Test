import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./welcome.scss"

const Welcome = ({isSignIn}) => {
  const { t } = useTranslation();

  return (
    <div id="welcomeContainer" className="container">
      <article>
        <h1>{t("welcomePage.pageTitle")}</h1>
        <Link className={`link ${isSignIn ? "hide":"show"}`} to={"/signin"}>{t("welcomePage.signin")}</Link>
      </article>
    </div>
  );
};

export default Welcome;
