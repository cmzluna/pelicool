import React from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Favorites from "../components/Favorites";
import { useHistory } from "react-router-dom";
import Users from "./Users";
import { Link } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/users";
import { useSelector } from "react-redux";
import { getFavorites } from "../store/favorites";
import { useEffect } from "react";

//    JSON.stringify

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");

  const user = useSelector((state) => state.user);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email.value, password.value);
    return axios
      .post("http://localhost:3001/api/login", {
        email: email.value,
        password: password.value,
      })
      .then((r) => r.data)
      .then((data) => dispatch(userLogin(data)))
      .catch((err) => console.log(err));
    // history.push("/users/favs");
    //  this.setState({ value: event.target.value });
  }

  useEffect(() => {
    if (user.id) {
      console.log(user.id);
      dispatch(getFavorites(user.id))
        .then((data) =>
          //message.success(`Success login: welcome back ${data.name}`)
          console.log(`Favorites loaded from BD into state`, data)
        )
        .catch((err) => console.log(err));
    } else return;
  }, [user.id]);

  return (
    <div>
      {user.id ? (
        <Favorites />
      ) : (
        <>
          <div>
            <h2>Sign in to your account</h2>
          </div>

          <form onSubmit={handleSubmit} className="form-signup">
            {/* <input type="hidden" name="remember" value="true" /> */}
            <div>
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
        </>
      )}
    </div>
  );
}
