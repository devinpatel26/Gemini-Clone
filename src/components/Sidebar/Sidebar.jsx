import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="Sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="menu" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus-icon" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="message-icon" />
            <p>What is react ...</p>
          </div>
        </div>
      </div>
      <div className="botton">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question-icon" />
          <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="histroy-icon" />
          <p>Activity</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting-icon" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
