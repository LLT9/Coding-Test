import React from "react";
import chats from "../materials/sample.json";

const Chats = () => {
  let db = chats.sort((a, b) => b.receive_time - a.receive_time);
  const getTime = (epoch) => {
    const addZero = (i) => {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    };

    let now = Date.now();
    let lastDate = new Date(epoch);
    let dateStr = 0;

    if (now - lastDate > 86400000) {
      dateStr =
        addZero(lastDate.getFullYear()) +
        "/" +
        addZero(lastDate.getMonth() + 1) +
        "/" +
        addZero(lastDate.getDate());
    } else {
      dateStr =
        addZero(lastDate.getHours()) + ":" + addZero(lastDate.getMinutes());
    }
    return dateStr;
  };

  return (
    <div className="chats">
      {chats.map((db, index) => (
        <div className="singleChat" key={index + 1}>
          <img src={`${db.image}`} alt="userImg" />
          <div className="middle">
            <span className="userName">{db.name}</span>
            <span
              className={
                db.status === "Typing..."
                  ? "lastMsg typing"
                  : db.unread_message > 0
                  ? "lastMsg bold"
                  : "lastMsg lighter"
              }
            >
              {db.message}
            </span>
          </div>
          <div className="right">
            <span className="receiveTime">{getTime(db.receive_time)}</span>
            <span
              className={
                db.unread_message > 0 ? "unreadNum" : "unreadNum transparent"
              }
            >
              {db.unread_message}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
