import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [enterUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const usernameChangeHandlar = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setEnteredUsername(event.target.value);
  };
  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setEnteredPassword(event.target.value);
  };
  const loginSubmitHandler = () => {
    console.log(enterUsername);
    console.log(enteredPassword);
  };
  return (
    <div className="login__controls">
      <div className="login__control">
        <label>Username</label>
        <input
          type="text"
          value={enterUsername}
          onChange={usernameChangeHandlar}
        />
      </div>
      <br />
      <div className="login__control">
        <label>Password</label>
        <input
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
      </div>
      <div>
        <button
          className="login__actions"
          type="submit"
          onClick={loginSubmitHandler}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage
