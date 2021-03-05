import React from "react";
import "./Login.css";
import LoginBg from "../assets/login-img.jpg";
import fb from "../assets/Facebook-Circled.png";
import google from "../assets/Google.png";
function Login() {
  return (
    <div className="login">
      {/* <img src={LoginBg} alt="" className="login__img" /> */}
      <div class="row login__maincontainer">
        <div class="col-sm-6 card__content">
          <div className="login__content1"> EXPLORE NEARBY PLACES</div>
          <div className="login__content2">
            Looking for new places to visit around the globe?
          </div>
          <div className="login__content3">
            Share your adventures with your close ones and save your memories in
            a unique style.
          </div>
        </div>

        <div class="col-sm-6 card login__card ">
          <div className="loginCard__info">
            <div class="row login__cardtitle">
              <p>Login to continue exploring</p>
            </div>
            <div class="row login__cardFbG">
              <div class="col-sm-5 card__colFb">
                <img src={fb} className="card__fbImg" /> &nbsp;&nbsp;Facebook
              </div>
              <div class="col-sm-2"></div>
              <div class="col-sm-5 card__colGoogle">
                <img src={google} className="card__gImg" />
                &nbsp;&nbsp;Google
              </div>
            </div>
            <div className="row loginCard__Or">
              <div class="col-sm-5 card__dash1">
                {" "}
                <hr />
              </div>
              <div class="col-sm-2 card__Or">OR</div>
              <div class="col-sm-5 card__dash2">
                {" "}
                <hr />
              </div>
            </div>

            <div class="row card__inputs">
              <p className="card__email">Email</p>
              <div className="card__emailBox">
                <input className="card__emailBox_input" type="text" />
              </div>
              <p className="card__password">Password</p>
              <div className="card__PasswordBox">
                <input className="card__passBox_input" type="password" />
              </div>
            </div>

            <div class="row card__inputDetails">
              <div class="col-sm card__signIn">
                {" "}
                <input type="checkbox" /> Stay signed in?
              </div>
              <div class="col-sm card__fpass">Forgot Password ?</div>
              <div></div>
            </div>

            <div class="row card__buttons">
              <div class="col-sm-5 card__signUpCol">
                <button
                  type="button"
                  class="btn btn-outline-primary card__signUpbtn">
                  Sign Up
                </button>
              </div>
              <div class="col-sm-2 card__btnSpace"></div>
              <div class="col-sm-5 card__LoginCol">
                {" "}
                <button type="button" class="btn btn-dark card__loginbtn">
                  Login
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