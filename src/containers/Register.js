import React from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useHistory } from "react-router";
import Users from "./Users";
import { useDispatch } from "react-redux";
import { useInput } from "../hooks/useInput";

import { userSignUp } from "../store/users";


const history = useHistory();



export default function SignUp() {
    const dispatch = useDispatch();
    
    const email = useInput("email");
    const password = useInput("password");

    return (
      <div>
        <div>
          <h2>Sign up</h2>
        </div>

        <form onSubmit={() => dispatch(userSignUp({email, password}))}>
          <input type="hidden" name="remember" value="true" />
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Email address"
              value={...email}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={...password} required />
          </div>
          <div>
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    );
  }

