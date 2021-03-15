import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LogoImg from "../assets/logo.png";
import UserImg from "../assets/user-img.jpg";
import "./Header.css";

function Header({ signedIn, pathName }) {
  let history = useHistory();

  const goToLogin = (login) => {
    history.push({
      pathname: "/login",
      state: { isLogin: login },
    });
  };

  return signedIn === true ? (
    <div className={pathName === "/login" ? "tranparentHeader" : "header"}>
      <Link to="/">
        <img src={LogoImg} alt="" className="header__logo" />
      </Link>
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
    <div className={pathName === "/login" ? "tranparentHeader" : "header"}>
      <Link to="/">
        <img src={LogoImg} alt="" className="header__logo" />
      </Link>
      <div className="header__nav">
        <Link to="/">
          <h6>Explore</h6>
        </Link>
      </div>
      <div className="header__right__buttons">
        <button
          className="header__login_btn"
          onClick={() => {
            goToLogin("login");
          }}>
          Login
        </button>
        <button
          className="header__signIn_btn"
          onClick={() => {
            goToLogin("signup");
          }}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
