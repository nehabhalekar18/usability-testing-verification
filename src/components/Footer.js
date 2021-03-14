import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h6>
        <CopyrightIcon fontSize="small" /> Team 1 • Usability Testing and
        Verification
      </h6>
      <div className="footer__socialMedia">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}

export default Footer;
