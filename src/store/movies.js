import { createReducer, createAction } from "@reduxjs/toolkit";
import axios from "axios";

// la accion define que es lo que va a pasar
//export const userLogin = createAction("USER_LOGIN");
//export const userSignUp = createAction("USER_SIGNUP");

// action creator
// setAirports = { type: 'add', payload: ''}

//setAirports devuelve el TYPE al hacer toString
export const addMoviesList = createAction("ADD_MOVIES_LIST");
export const getMoviesList = createAction("GET_MOVIES_LIST");
export const addSelectedMovie = createAction("ADD_SELECTED_MOVIE");

// export const addMoviesList = createAsyncThunk("ADD_MOVIES_LIST", (obj) => {
//   console.log("OBJ => ", obj);
//   return axios.post("http://localhost:3001/api/login", obj).then((r) => r.data);
// });

// export const addToFavorites = createAsyncThunk(
//   "ADD_TO_FAVORITES",
//   (movie, thunkAPI) => {
//     const { user } = thunkAPI.getState();
//     if (!user.id) throw new Error("You need to be logged in");

//     // como el id de la movie es tt8537030 tengo que buscar ID en OMDB
//     return axios
//       .put(
//         `http://localhost:3001/api/favorites?userId=${user.id}&movieId=${movie.imdbID}`
//       )
//       .then(() => movie);
//   }
// );

const moviesReducer = createReducer(
  {},
  {
    [addMoviesList]: (state, action) => {
      return { ...state, moviesList: action.payload };
    },
    [getMoviesList]: (state, action) => {
      return state.movies;
    },
  }
);

export default moviesReducer;
