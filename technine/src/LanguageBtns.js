import React from "react"
import { useTranslation } from "react-i18next"
import "./LaguageBtns.css"

function LanguageBtns() {
  const { t, i18n } = useTranslation()
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div className="nav_languageBtns">
      <select onChange={changeLanguage} value={i18n.language}>
        <option value="en">English</option>
        <option value="zh-tw">{t("中文")}</option>
      </select>
    </div>
  )
}

export default LanguageBtns
