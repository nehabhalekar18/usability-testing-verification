import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import React from "react";
import { Link } from "react-router-dom";
import fb from "../assets/Facebook-Circled.png";
import google from "../assets/Google.png";
import "./Login.css";

function LoginCard({ setSignUp, props, setActiveTag }) {
  console.log(props);
  return (
    <div className="loginCard__info">
      <div className="row login__cardtitle">
        <p>Login to continue exploring</p>
      </div>
      <div className="row login__cardFbG">
        <div className="col-sm-5 card__colFb">
          <img src={fb} className="card__fbImg" alt="" /> &nbsp;&nbsp;Facebook
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-5 card__colGoogle">
          <img src={google} className="card__gImg" alt="" />
          &nbsp;&nbsp;Google
        </div>
      </div>
      <div className="row loginCard__Or">
        <div className="col-sm-5 card__dash1">
          <hr />
        </div>
        <div className="col-sm-2 card__Or">OR</div>
        <div className="col-sm-5 card__dash2">
          <hr />
        </div>
      </div>

      <div className="row card__inputs">
        <p className="card__email">Email</p>
        <div className="card__emailBox">
          <input className="card__emailBox_input" type="text" />
        </div>
        <p className="card__password">Password</p>
        <div className="card__PasswordBox">
          <input className="card__passBox_input" type="password" />
          <VisibilityOffIcon />
        </div>
      </div>

      <div className="row card__inputDetails">
        <div className="col-sm card__signIn">
          <input type="checkbox" /> Stay signed in?
        </div>
        <div className="col-sm card__fpass">Forgot Password ?</div>
        <div></div>
      </div>

      <div className="row card__buttons">
        <div className="col-sm-5 card__signUpCol">
          <button
            type="button"
            className="btn btn-outline-primary card__signUpbtn"
            onClick={() => setSignUp(true)}>
            Sign Up
          </button>
        </div>
        <div className="col-sm-2 card__btnSpace"></div>
        <div className="col-sm-5 card__LoginCol">
          <Link
            to={{
              pathname: "/trips",
              state: {
                isLogin: true,
                locationList: props.location.state.locationList,
                action: props.location.state.action,
              },
            }}>
            <button
              type="button"
              className="btn btn-dark card__loginbtn"
              onClick={() => setActiveTag("trips")}>
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
