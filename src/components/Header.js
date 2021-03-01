import { Button } from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import React from "react";
import "./Header.css";
function Header({ signedIn }) {
  console.log(signedIn);
  return signedIn === true ? (
    <div className="header">
      <h1>Trip Buddy</h1>
      <div className="header__nav">
        <h4>Explore</h4>
        <h4>My Trips</h4>
        <h4>Storybooks</h4>
      </div>
      <div className="header__right">
        <AccountCircleOutlinedIcon />
        <h4>John Smith</h4>
      </div>
    </div>
  ) : (
    <div className="header">
      <h1>Trip Buddy</h1>
      <div className="header__nav">
        <h4>Explore</h4>
      </div>
      <div className="header__right__buttons">
        <Button variant="outlined">Sign Up</Button>
        <Button variant="outlined">Login</Button>
      </div>
    </div>
  );
}

export default Header;
