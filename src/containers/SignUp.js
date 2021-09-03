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
  const name = useInput("name");

  const user = useSelector((state) => state.user);

  function handleChange(e) {
    e.preventDefault();
    dispatch(
      userSignUp({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );

    //  this.setState({ value: event.target.value });
  }

  return (
    <div>
      <div>
        <h2>Sign in to your account</h2>
      </div>

      <form onSubmit={handleChange} className="form-signup">
        {/* <input type="hidden" name="remember" value="true" /> */}
        <div>
          <input
            type="text"
            name="username"
            placeholder="your full name"
            value={name.value}
            onChange={name.onChange}
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="username"
            placeholder="your email address"
            value={email.value}
            onChange={email.onChange}
            required
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="your password"
            onChange={password.onChange}
            value={password.value}
            required
          />
        </div>

        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}
