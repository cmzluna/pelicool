import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getFavorites = createAsyncThunk("GET_FAVORITES", (userId) => {
  //const { user } = thunkAPI.getState();
  console.log("USER ID => ", userId);

  return axios
    .get(`http://localhost:3001/api/favorites?userId=${userId}`)
    .then((r) => r.data)
    .catch((err) => console.log(err));
});

export const addToFavorites = createAsyncThunk(
  "ADD_TO_FAVORITES",
  (movie, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user.id) throw new Error(" === YOU NEED TO BE LOGGED IN ===");

    return axios
      .put(
        `http://localhost:3001/api/favorites?userId=${user.id}&movieId=${movie.imdbID}`,
        movie
      )
      .then(() => movie);
  }

  // como el id de la movie es tt8537030 tendre que buscar ID en OMDB ?
);

export const removeFromFavorites = createAsyncThunk(
  "REMOVE_FROM_FAVORITES",
  (movie, thunkAPI) => {
    const { user, favorites } = thunkAPI.getState();
    if (!user.id) throw new Error(" === YOU NEED TO BE LOGGED IN ===");

    return axios
      .delete(
        `http://localhost:3001/api/favorites?userId=${user.id}&movieId=${movie.imdbID}`,
        movie
      )
      .then(() => movie)
      .catch((err) => console.log(err));
  }
);

const favoritesReducer = createReducer([], {
  [addToFavorites.fulfilled]: (state, action) => [...state, action.payload],
  [getFavorites.fulfilled]: (state, action) => action.payload,
  [removeFromFavorites.fulfilled]: (state, action) => {
    return state.filter((item) => item.imdbID !== action.payload.imdbID);
  },

  //[deleteFav]: (state, action) => [...state, action.payload],
});

/*
 [addToFavorites.fulfilled]: (state, action) =>
    action.payload ? [...state, action.payload] : state,
*/

// [addFav] action type
//An object mapping from action types to case reducers

//The action creator can be called either without arguments or with a payload to be attached to the action.
//the action creator overrides toString() so that the action type becomes its string representation.

/*
const favReducer = (state, action) => { newState }

const favReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return "";
      case "remove":
        return "";
    }
  };

  */
export default favoritesReducer;
