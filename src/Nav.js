import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import LanguageBtns from "./LanguageBtns";

export default function Nav() {
  const [show, handleShow] = useState(false);
  const user = useSelector(selectUser);

  const transistionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transistionNavBar);
    return () => window.removeEventListener("scroll", transistionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_balck"}`}>
      <div className="nav_contents">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
            className="nav_logo"
          ></img>
        </Link>
        <div className="nav_rightBtns">
          <LanguageBtns></LanguageBtns>
        </div>
        {user?.user?.email ? (
          <Link to="/profile">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
              className="nav_avatar"
            ></img>
          </Link>
        ) : (
          <Link to="/login">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
              className="nav_avatar"
            ></img>
          </Link>
        )}
      </div>
    </div>
  );
}
