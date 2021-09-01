import React from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import Users from "./Users";
import { Link } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/users";
import { useSelector } from "react-redux";

//    JSON.stringify

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");

  const user = useSelector((state) => state.user);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userLogin({ email: email.value, password: password.value }));
    // history.push("/users/favs");
    //  this.setState({ value: event.target.value });
  }

  return (
    <div>
      {user.id ? (
        <div>
          <h2>Welcome, {user.email} Here are your favorites ! </h2>
          <p>YOUR FAVORITES</p>
        </div>
      ) : (
        <p>
          <div>
            <h2>Sign in to your account</h2>
          </div>

          <form onSubmit={handleSubmit}>
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
        </p>
      )}
    </div>
  );
}
