import { useTranslation } from "react-i18next";
import ChangeLangSelect from "../component/ChangeLangSelect";
import { useDispatch } from "react-redux";
import { changeAuthState } from "../redux/auth";

const MainPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(changeAuthState())
  }
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
      <h1>{t('main_page_here')}</h1>
      <button onClick={handleLogout}>{t('logout')}</button>
      <ChangeLangSelect/>
    </div>
  );
};

export default MainPage;
