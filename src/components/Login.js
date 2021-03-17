import React, { useState } from "react";
import "./Login.css";
import LoginCard from "./LoginCard";
import SignUpCard from "./SignUpCard";

function Login({ setActiveTag, props }) {
  const [signUp, setSignUp] = useState(false);
  return (
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

        <div className="col-sm-6 card login__card ">
          {signUp === true ? (
            <SignUpCard setSignUp={setSignUp} props={props} />
          ) : (
            <LoginCard
              setSignUp={setSignUp}
              props={props}
              setActiveTag={setActiveTag}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
