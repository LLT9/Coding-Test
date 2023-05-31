import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./redux/login-redux/login";
import { useTranslation } from "react-i18next";
function Profile() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };
  return (
    <>
      <h1>{t("Profile")}</h1>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          width="100%"
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        />
        <Card.Body>
          <Card.Title>{t("Admin Profile")}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            suscipit doloribus molestiae ratione enim accusantium totam, dolore
            magnam, nemo minus officia neque quasi, veniam similique rerum iusto
            inventore! Vel, fuga.
          </Card.Text>
        </Card.Body>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
        >
          {t("Logout")}
        </Button>
      </Card>
    </>
  );
}
export default Profile;
