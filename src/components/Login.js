import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import fb from "../assets/Facebook-Circled.png";
import google from "../assets/Google.png";
import "./Login.css";

function Login(props) {
  const location = useLocation();
  let history = useHistory();
  useEffect(() => {}, [location]);
  const isLogin = props.location.state.isLogin;

  const goToLogin = (login) => {
    history.push({
      pathname: "/login",
      state: { isLogin: login },
    });
  };

  return isLogin === "login" ? (
    <div className="login">
      <div className="row login__maincontainer">
        <div className="col-sm-6 card__content">
          <div className="login__content1"> EXPLORE NEARBY PLACES</div>
          <div className="login__content2">
            Looking for new places to visit around the globe?
          </div>
          <div className="login__content3">
            Share your adventures with your close ones and save your memories in
            a unique style.
          </div>
        </div>

        {/* LOGIN */}

        <div className="col-sm-6 card login__card ">
          <div className="loginCard__info">
            <div className="row login__cardtitle">
              <p>Login to continue exploring</p>
            </div>
            <div className="row login__cardFbG">
              <div className="col-sm-5 card__colFb">
                <img src={fb} className="card__fbImg" alt="" />{" "}
                &nbsp;&nbsp;Facebook
              </div>
              <div className="col-sm-2"></div>
              <div className="col-sm-5 card__colGoogle">
                <img src={google} className="card__gImg" alt="" />
                &nbsp;&nbsp;Google
              </div>
            </div>
            <div className="row loginCard__Or">
              <div className="col-sm-5 card__dash1">
                {" "}
                <hr />
              </div>
              <div className="col-sm-2 card__Or">OR</div>
              <div className="col-sm-5 card__dash2">
                {" "}
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
                {" "}
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
                  onClick={() => {
                    goToLogin("MM");
                  }}>
                  Sign Up
                </button>
              </div>
              <div className="col-sm-2 card__btnSpace"></div>
              <div className="col-sm-5 card__LoginCol">
                {" "}
                <Link to={{ pathname: "/trips", state: { isLogin: true } }}>
                  <button type="button" className="btn btn-dark card__loginbtn">
                    Login
                  </button>
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="login">
      <div className="row login__maincontainer">
        <div className="col-sm-6 card__content">
          <div className="login__content1"> EXPLORE NEARBY PLACES</div>
          <div className="login__content2">
            Looking for new places to visit around the globe?
          </div>
          <div className="login__content3">
            Share your adventures with your close ones and save your memories in
            a unique style.
          </div>
        </div>

        {/* SIGN UP */}

        <div className="col-sm-6 card login__card">
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
                {" "}
                <input type="checkbox" /> By accepting I agree to terms and
                privacy policies as mentioned.
              </div>
            </div>

            <div className="row card__buttons">
              <div className="col-sm-5 card__signUpCol">
                <button
                  type="button"
                  className="btn btn-outline-primary card__signUpbtn"
                  onClick={() => {
                    goToLogin("login");
                  }}>
                  Log In
                </button>
              </div>
              <div className="col-sm-2 card__btnSpace"></div>
              <div className="col-sm-5 card__LoginCol">
                {" "}
                <button type="button" className="btn btn-dark card__loginbtn">
                  Sign Up
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
