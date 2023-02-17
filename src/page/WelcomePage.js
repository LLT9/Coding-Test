import { selectAuth } from "../redux/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ChangeLangSelect from "../component/ChangeLangSelect";
const WelcomePage = () => {
  const auth = useSelector(selectAuth); // to know the user login or not
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const navigateToProfile = () => {
    navigate("/main");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap:13,
      }}
    >
      <h1>{t('welcome_page')}</h1>
      {auth === true && (
        <button onClick={navigateToProfile}>{t('go_to_user_profile')}</button>
      )}
      {auth === false && <button onClick={navigateToLogin}>{t('go_to_login')}</button>}
      <ChangeLangSelect/>
    </div>
  );
};

export default WelcomePage;
