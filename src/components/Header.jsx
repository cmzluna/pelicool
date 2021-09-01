import * as React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userSignUp, userLogout } from "../store/users";

export default () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // deberian ir en componente Login y SignUp respectivamente ?

  // reemplazar ambas funciones por un custom hook
  const handleLogin = () => {
    dispatch(userLogin())
      .then((data) =>
        //message.success(`Success login: welcome back ${data.name}`)
        console.log(`Success login: welcome back ${data.name}`)
      )
      .catch((err) => console.log(`Failed login: ${err.message}`, 5));
    //replace console with  message.error
  };

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
    dispatch(userLogout())
      .then((data) =>
        //message.success(`Success login: welcome back ${data.name}`)
        console.log(`Success logout ! `)
      )
      .catch((err) => console.log(`Failed logout: ${err.message}`, 5));
    //replace console with  message.error
  };

  return (
    <header>
      <div className="header">
        <b>OMDB</b>
        <Link to="/movies">Home</Link>
        {user.id ? (
          <div>
            <span>Welcome, {user.email} ! </span>
            <Link to="/users/favs">Your Favorites</Link>
            <Link to="/logout" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        ) : (
          <p>
            <Link to="/login" onClick={handleLogin}>
              Log in
            </Link>{" "}
            <Link to="/SignUp">Sign up</Link>
          </p>
        )}
      </div>
      {/* <Button startIcon={<SaveIcon />} variant="contained" color="secondary">
        Hello World
      </Button> */}
    </header>
  );
};
