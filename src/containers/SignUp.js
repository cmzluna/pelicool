import React from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useHistory } from "react-router";
import Users from "./Users";

import { useInput } from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { userSignUp } from "../store/users";
import { useSelector } from "react-redux";

//    JSON.stringify

export default function SignUp() {
  const dispatch = useDispatch();
  const email = useInput("email");
  const password = useInput("password");

  const user = useSelector((state) => state.user);

  function handleChange(e) {
    e.preventDefault();
    dispatch(userSignUp({ email: email.value, password: password.value }));

    //  this.setState({ value: event.target.value });
  }

  return (
    <div>
      <div>
        <h2>Sign in to your account</h2>
      </div>

      <form onSubmit={handleChange}>
        {/* <input type="hidden" name="remember" value="true" /> */}
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Email address"
            value={email.value}
            onChange={email.onChange}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={password.onChange}
            value={password.value}
            required
          />
        </div>

        <p>{password.value}</p>
        <p>{email.value}</p>

        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}
