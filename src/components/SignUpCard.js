import React from "react";
import { Link } from "react-router-dom";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import "./Login.css";

function SignUpCard({ setSignUp, action }) {
  return (
    <div className="loginCard__info">
      <div className="row login__cardtitle">
        <p>Create account to continue exploring</p>
      </div>

      <div className="row card__inputs">
        <p className="card__signUpemail">Email</p>
        <div className="card__emailBox">
          <input className="card__emailBox_input" type="text" />
        </div>
        <p className="card__signUpPwd">Password</p>
        <div className="card__PasswordBox">
          <input className="card__passBox_input" type="password" />
          <VisibilityOffIcon />
        </div>
        <p className="card__signUpCpwd">Confirm Password</p>
        <div className="card__PasswordBox">
          <input className="card__passBox_input" type="password"></input>
          <VisibilityOffIcon />
        </div>
      </div>

      <div className="row card__inputDetails">
        <div className="col-sm card__signIn">
          <input type="checkbox" /> By accepting I agree to terms and privacy
          policies as mentioned.
        </div>
      </div>

      <div className="row card__buttons">
        <div className="col-sm-5 card__signUpCol">
          <button
            type="button"
            className="btn btn-outline-primary card__signUpbtn"
            onClick={() => setSignUp(false)}>
            Log In
          </button>
        </div>
        <div className="col-sm-2 card__btnSpace"></div>
        <div className="col-sm-5 card__LoginCol">
          <Link
            to={{
              pathname: "/trips",
              state: {
                isLogin: true,
                action: action,
              },
            }}>
            <button type="button" className="btn btn-dark card__loginbtn">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpCard;
