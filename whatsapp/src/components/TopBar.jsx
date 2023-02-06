import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import contacts from "../materials/sample.json";

const TopBar = () => {
  return (
    <div className="container">
      <div className="top">
        <span>Whatsapp</span>
        <div className="buttons">
          <SearchIcon sx={{ fontSize: 30 }} />
          <MoreVertIcon sx={{ fontSize: 30 }} />
        </div>
      </div>
      <div className="stories">
        <div className="outer grey">
          <AddIcon className="add" sx={{ fontSize: 15 }} />
        </div>
        {contacts.map((contact, index) => (
          <img
            className="outer pink"
            key={index + 1}
            src={`${contact.image}`}
            alt="userImg"
          />
        ))}
      </div>
    </div>
  );
};

export default TopBar;
