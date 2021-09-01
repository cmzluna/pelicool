import React from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MoviesContainer from "./MoviesContainer";
import MovieDetails from "../components/MovieDetails";
import Users from "./Users";
import UserProfile from "./UserProfile";
import Favorites from "../components/Favorites";
import Login from "./Login";
import SignUp from "./SignUp";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/users";

export default function Main() {
  const dispatch = useDispatch();

  /*
probar con 

 const { user } = thunkAPI.getState();
    if (!user.id) throw new Error("You need to be logged in");
    
  */

  //verifico si hay usuario logueado desde el back para lograr persistencia :
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/me") // entro en la ruta desde donde el back me informa si hay un usuario (lo hace Passport - enviando el req.user - )
      .then((res) => res.data)
      .then((user) => {
        console.log(`found user ${user.email}`);
        // setUser(user);  // (version local)
        dispatch(userLogin(user));
      })
      .then((data) =>
        //message.success(`Success login: welcome back ${data.name}`)
        console.log(`usuario ya estaba logueado! ${data.name}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <Header />

      <section className="content">
        <Switch>
          <Route exact path="/movies" render={() => <MoviesContainer />} />
          <Route
            path="/movies/:id"
            render={(props) => <MovieDetails props={props} />}
          />
          <Route path="/users/favs" render={() => <Favorites />} />
          <Route path="/users" render={() => <Users />} />

          <Route path="/users/:userId" render={() => <UserProfile />} />

          <Route path="/Login" render={() => <Login />} />
          <Route path="/Signup" render={() => <SignUp />} />

          <Redirect path="/" to="/movies" />
        </Switch>
      </section>

      <Footer />
    </React.Fragment>
  );
}
