import React, { useState } from "react";
import ChatIcon from "@material-ui/icons/Chat";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SendIcon from "@material-ui/icons/Send";
import ChatUser1 from "../assets/chat-img-1.jpg";
import ChatUser2 from "../assets/chat-img-2.jpg";
import ChatUser3 from "../assets/chat-img-3.jpg";
import UserImg from "../assets/user-img.jpg";
import "./ChatWindow.css";

function ChatWindow() {
  const [showChat, setShowChat] = useState(true);
  const [showChatTrigger, setShowChatTrigger] = useState(false);
  const toggleChat = () => {
    setShowChat(!showChat);
    setShowChatTrigger(!showChatTrigger);
  };
  return (
    <div className="chatWindow">
      {showChat ? (
        <div className="chatWindow__card">
          <div className="chatWindow__nav">
            <h6>Paris Trip</h6>
            <div onClick={toggleChat}>
              <ExpandMoreIcon className="chatWindow__nav_icon" />
            </div>
          </div>
          <div className="chatWindow__chatBox">
            <div className="chatWindow__chatBox__left">
              <img
                src={ChatUser1}
                alt=""
                className="chatWindow__chatBox__userImg"
              />
              <p>Can we change trip dates</p>
            </div>
            <div className="chatWindow__chatBox__right">
              <p>I have exams after 10th</p>
              <img
                src={UserImg}
                alt=""
                className="chatWindow__chatBox__userImg"
              />
            </div>
            <div className="chatWindow__chatBox__left">
              <img
                src={ChatUser2}
                alt=""
                className="chatWindow__chatBox__userImg"
              />
              <p>I am free all the time</p>
            </div>
            <div className="chatWindow__chatBox__left">
              <img
                src={ChatUser3}
                alt=""
                className="chatWindow__chatBox__userImg"
              />
              <p>I also have no issues</p>
            </div>
          </div>
          <div className="chatWindow__input">
            <input type="text" placeholder="Type message.." />
            <SendIcon />
          </div>
        </div>
      ) : (
        <div className="chatWindow__chatTrigger" onClick={toggleChat}>
          <ChatIcon />
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
