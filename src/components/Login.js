import React from "react";
import "./Login.css";
import LoginBg from "../assets/login-img.jpg";
function Login() {
  return (
    <div className="login">
      <img src={LoginBg} alt="" className="login__img" />
      <div>
        <div class="col-sm-6 ">
          <div className="login__content1"> EXPLORE NEARBY PLACES</div>
          <div className="login__content2">
            Looking for new places to visit around the globe?
          </div>
          <div className="login__content3">
            Share your adventures with your close ones and save your memories in
            a unique style
          </div>
        </div>
        <div class="col-sm-6 card login__card ">
          <p class="card-title login__cardtitle">Login to continue exploring</p>
          <p class="card-text login__cardtext">Facebook Google</p>
          <p className="login__cardOR">
            <div class="row card-text ">
              <div class="col-sm login__cardhr-1"></div>
              <div class="col-sm login__OR">OR</div>
              <div class="col-sm login__cardhr-2"></div>
            </div>
          </p>
        </div>
        <form className="login__form">
          <div class="form-group">
            <label for="formGroupExampleInput">Email</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Password</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input"
            />
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Stay signed in
                  </label>
                </div>
              </div>
              <div class="col">
                <div class="form-group">Forgot password?</div>
              </div>
            </div>
          </div>
        </form>
        <button type="button" class="btn btn-outline-primary login__signup">
          Primary
        </button>
        <button type="button" class="btn btn-dark login__loginbtn">
          Dark
        </button>
      </div>
    </div>
  );
}

export default Login;
