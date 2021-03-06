import React from "react";
import LogoImg from "../assets/logo.png";
import UserImg from "../assets/user-img.jpg";
import "./Header.css";

function Header({ signedIn }) {
  return signedIn === true ? (
    <div className="header">
      <img src={LogoImg} alt="" className="header__logo" />
      <div className="header__nav">
        <h6>Explore</h6>
        <h6>My Trips</h6>
        <h6>Storybooks</h6>
      </div>
      <div className="header__right">
        <img src={UserImg} alt="" className="header__user" />
      </div>
    </div>
  ) : (
    <div className="header">
      <img src={LogoImg} alt="" className="header__logo" />
      <div className="header__nav">
        <h6>Explore</h6>
      </div>
      <div className="header__right__buttons">
        <button className="header__login_btn">Login</button>
        <button className="header__signIn_btn">Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
