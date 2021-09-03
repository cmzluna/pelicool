import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

// la accion define que es lo que va a pasar
//export const userLogin = createAction("USER_LOGIN");
//export const userSignUp = createAction("USER_SIGNUP");

// action creator
// setAirports = { type: 'add', payload: ''}

//setAirports devuelve el TYPE al hacer toString
export const addMoviesList = createAction("ADD_MOVIES_LIST");
export const getMoviesList = createAction("GET_MOVIES_LIST");

// usar el imdbID para hacer otra busqueda
export const addSelectedMovie = createAsyncThunk(
  "ADD_SELECTED_MOVIE",
  (movieID) => {
    console.log("OBJ => ", movieID);
    return axios
      .get(`http://www.omdbapi.com/?apikey=1663c88f&i=${movieID}`)
      .then((r) => r.data)
      .catch((err) => console.log(err));

    // return axios.post("/api/signup").then((r) => r.data);
  }
);

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
  {
    moviesList: [],
    selectedMovie: {},
  },
  {
    [addMoviesList]: (state, action) => {
      return { ...state, moviesList: action.payload };
    },
    [getMoviesList]: (state, action) => {
      return state.movies;
    },

    [addSelectedMovie.fulfilled]: (state, action) => {
      return { ...state, selectedMovie: action.payload };
    },
  }
);

export default moviesReducer;
