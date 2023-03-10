import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./switchLanguage.scss"

const SwitchLanguage = ({userData, setUserData}) => {
  const { t } = useTranslation();
  function changeLanguage(lan) {
    i18n.changeLanguage(lan);
  }

  return (
    <div id="switch">
      {/* <div className="linkContainer"> */}
      <Link className={`link ${userData.token ? "show":"hide"}`} to={"/"} onClick={()=>setUserData({token:null})}>{t("switchLanguage.signOut")}</Link>
      <Link className="link" to={"/"}>{t("switchLanguage.homePage")}</Link>
      {/* </div> */}
      {/* <div className="btn"> */}
        <button type="button" onClick={() => changeLanguage("en")}>English</button>
        <button type="button" onClick={() => changeLanguage("zh-tw")}>繁體中文</button>
      {/* </div> */}
    </div>
  );
};

export default SwitchLanguage;
