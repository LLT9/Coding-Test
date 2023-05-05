import React, { useEffect } from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProfileScreen() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  useEffect(() => {
    if (user?.user == null) {
      navigate("/login");
    }
  }, [user]);
  return (
    <div className="profileScreen">
      <Nav></Nav>
      <div className="profileScreen_body">
        <h1>{t("Edit Profile")}</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
            className="avatar"
          ></img>
          <div className="profileScreen_details">
            <h2>{user?.user?.email}</h2>
            <div className="profileScreen_plans">
              <h3>{t("Plans")}</h3>
              <button
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}
                className="profileScreen_signOut"
              >
                {t("Sign Out")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
