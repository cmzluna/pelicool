import React, { useState } from "react";
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
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
const useStyles = makeStyles({
  container: {
    display: "flex",
    marginTop: 200,
    padding: 50,
    alignItems: "center",
  },
  btnLogin: {
    margin: 10,
    marginTop: 30,
  },
  snackbar: {
    marginTop: 80,
    whiteSpace: "pre-wrap",
  },
});

//    JSON.stringify

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");

  const user = useSelector((state) => state.user);

  const [messageInfo, setMessageInfo] = useState("");
  const [open, setOpen] = useState({ open: false });

  React.useEffect(() => {
    if (user.id) {
      history.push("/");
    } else return;
  }, [user.id]);

  React.useEffect(() => {
    if (messageInfo) {
      setOpen({ open: true });
    }
  }, [messageInfo]);

  const handleClose = (event, reason) => {
    setOpen({ open: false });
    setMessageInfo("");
  };

  function handleSubmit(e) {
    e.preventDefault();

    return axios
      .post("http://localhost:3001/api/login", {
        email: email.value,
        password: password.value,
      })

      .then((r) => {
        dispatch(userLogin(r.data));
      })
      .catch((err) => {
        console.log("ENTRE EN ERROR => ", err);
        setMessageInfo(
          "Invalid credentials. \nPlease, verify and try again..."
        );

        console.log(err);
      });
    // history.push("/users/favs");
    //  this.setState({ value: event.target.value });
  }
  /*
  useEffect(() => {
    if (user.id) {
    
      console.log(user.id);
    

      dispatch(getProfile(user.id))
        .then((data) =>
          //message.success(`Success login: welcome back ${data.name}`)
          console.log(`Favorites loaded from BD into state`, data)
        )
        .catch((err) => console.log(err));
    } else return;


  }, [user.id]);

      */

  return (
    <div>
      {user.id ? (
        <Favorites />
      ) : (
        <>
          {messageInfo ? (
            <Snackbar
              open={open.open}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              className={classes.snackbar}
            >
              <Alert severity="error" onClose={handleClose}>
                <div
                  style={{
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "center",
                  }}
                >
                  {messageInfo}
                </div>
              </Alert>
            </Snackbar>
          ) : null}

          <div className="form-container">
            <div className="form-title">
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
          </div>
        </>
      )}
    </div>
  );
}
