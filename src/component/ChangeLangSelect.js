/*
    A component to change the language for our website
    It is a select tag to let the user change the language
*/

import * as React from "react";
import { useTranslation } from "react-i18next";
import { LANG_CHOICE } from "../const";
// a component to let user change the language for the website
const ChangeLangSelect = () => {
  const { t, i18n } = useTranslation();

  const [lang, setLang] = React.useState(localStorage.getItem("lang") || "en");

  // change the localStorage and the i18n setting
  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <label>{t("language")}: </label>
      <select value={lang} onChange={handleChange}>
        {LANG_CHOICE.map((lang) => {
          return (
            <option key={lang.value} value={lang.value}>
              {lang.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ChangeLangSelect;
