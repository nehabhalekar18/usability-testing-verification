import React, { useState } from "react";
import { Link } from "react-router";
import "./Login.css";
import LoginCard from "./LoginCard";
import SignUpCard from "./SignUpCard";

function Login(props) {
  const [action] = useState(props.location.state.action);
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
            <SignUpCard setSignUp={setSignUp} action={action} />
          ) : (
            <LoginCard setSignUp={setSignUp} props={props} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
