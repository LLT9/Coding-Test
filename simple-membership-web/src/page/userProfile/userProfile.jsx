import React, { useState } from "react";
import "./userProfile.scss";
import { useTranslation } from "react-i18next";

const UserProfile = ({userData}) => {
  const [message, setMessage] = useState(false);
  const { t } = useTranslation();
  console.log(userData);
  return (
    <div id="profileContainer" className="container">
      <aside>
        <button type="button" onClick={() => setMessage(true)}>
          {t("userProfilePage.sideBar.basic")}
        </button>
        <button type="button" onClick={() => setMessage(true)}>
          {t("userProfilePage.sideBar.theme")}
        </button>
        <button type="button" onClick={() => setMessage(true)}>
          {t("userProfilePage.sideBar.privacy")}
        </button>
        <button type="button" onClick={() => setMessage(true)}>
          {t("userProfilePage.sideBar.advanced")}
        </button>
      </aside>
      <section>
        {/* <h2>{t("userProfilePage.pageTitle")}</h2> */}
        <h2>{`Welcome ${userData.userName}`}</h2>
      </section>

      <div
        className={`message ${message ? "show" : "hide"}`}
        onAnimationEnd={() => setMessage(false)}
      >
        {t("userProfilePage.message")}
      </div>
    </div>
  );
};

export default UserProfile;
