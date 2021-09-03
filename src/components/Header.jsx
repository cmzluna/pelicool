import * as React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userSignUp, userLogout } from "../store/users";

import axios from "axios";
export default () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // deberian ir en componente Login y SignUp respectivamente ?

  // reemplazar ambas funciones por un custom hook
  // const handleLogin = () => {
  //   dispatch(userLogin())
  //     .then((data) =>
  //       //message.success(`Success login: welcome back ${data.name}`)
  //       console.log(`Success login: welcome back ${data.name}`)
  //     )
  //     .catch((err) => console.log(`Failed login: ${err.message}`, 5));
  //   //replace console with  message.error
  // };

  const handleSignUp = () => {
    dispatch(userSignUp())
      .then((data) =>
        //message.success(`Success login: welcome back ${data.name}`)
        console.log(`Success login: welcome back ${data.name}`)
      )
      .catch((err) => console.log(`Failed login: ${err.message}`, 5));
    //replace console with  message.error
  };

  const handleLogout = () => {
    console.log("llegue a handle logout");

    axios
      .post("/api/logout")
      .then(() => dispatch(userLogin({}))) //axios no retorna la información inmediatamente, si no que la tiene guardada en la propiedad data
      .catch((err) => console.log(err));

    //replace console with  message.error
  };

  return (
    <header>
      <div className="header">
        <b>OMDB</b>

        <Link to="/movies">
          <Button variant="outlined">Main page</Button>
        </Link>

        {user.id ? (
          <div>
            <span>Welcome, {user.email} ! </span>

            <Link to="/users/favs">
              <Button variant="outlined">My favorites</Button>
            </Link>
            <Button variant="outlined" onClick={() => handleLogout()}>
              {" "}
              Logout
            </Button>

            <div onClick={() => handleLogout()}>Logout</div>
          </div>
        ) : (
          <p>
            <Link to="/login">
              <Button variant="outlined">Login</Button>
            </Link>
            <Link to="/SignUp">
              <Button variant="outlined">Sign up</Button>
            </Link>
          </p>
        )}
      </div>
      {/* <Button startIcon={<SaveIcon />} variant="contained" color="secondary">
        Hello World
      </Button> */}
    </header>
  );
};
