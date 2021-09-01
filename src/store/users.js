import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// la accion define que es lo que va a pasar
//export const userLogin = createAction("USER_LOGIN");
//export const userSignUp = createAction("USER_SIGNUP");

// action creator
// setAirports = { type: 'add', payload: ''}

//setAirports devuelve el TYPE al hacer toString

export const userLogin = createAsyncThunk("USER_LOGIN", (obj) => {
  console.log("user => ", obj);
  return axios.post("http://localhost:3001/api/login", obj).then((r) => r.data);
});
/* Ejemplo :

function logOutUser() {
  return function(dispatch, getState) {
    return axios.post('/logout').then(function() {
      // pretend we declared an action creator
      // called 'userLoggedOut', and now we can dispatch it
      dispatch(userLoggedOut());
    });
  };
}
*/
export const userSignUp = createAsyncThunk("USER_SIGNUP", (obj) => {
  console.log("OBJ => ", obj);
  return axios
    .post("http://localhost:3001/api/signup", obj)
    .then((r) => r.data)
    .catch((err) => console.log(err));

  // return axios.post("/api/signup").then((r) => r.data);
});

// hacer logout
export const userLogout = createAsyncThunk("USER_LOGOUT", (obj) => {
  console.log("OBJ => ", obj);
  return axios
    .post("http://localhost:3001/api/logout")
    .then((r) => r.data) //axios no retorna la información inmediatamente, si no que la tiene guardada en la propiedad data
    .catch((err) => console.log(err));

  // return axios.post("/api/signup").then((r) => r.data);
});

// asi como el estado es manejado por Redux, el pedido tambien

export const addToFavorites = createAsyncThunk(
  "ADD_TO_FAVORITES",
  (movie, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user.id) throw new Error("You need to be logged in");

    console.log("MOVIE EN ASYNCTHUNK: ", movie);
    return axios
      .put(
        `http://localhost:3001/api/favorites?userId=${user.id}&movieId=4` //${movie.imdbID}
      )
      .then(() => movie);
  }
  // como el id de la movie es tt8537030 tendre que buscar ID en OMDB ?
);

/* 
1er PARAMETRO:
 
movieId es la variable que le paso al action al momento de dispatchear la accion
 fijarse en /components/Movies.jsx

 2do PARAMETRO:
thunkAPI : Grupo de herramientas de funciones para usar en nuestr funcion
algo que trae es la integracion con el Store

const store= thunkAPI.getState()

trae TODO lo que haya en el estado del Store (no solamente de Users) 

 */
export const removeFromFavorites = createAsyncThunk(
  "REMOVE_FROM_FAVORITES",
  (movieId, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user.id) throw new Error("You need to be logged in"); // this should be imposible
    return axios
      .delete(`/api/favorites?userId=${user.id}&movieId=${movieId}`)
      .then(() => movieId);
  }
);

const userReducer = createReducer(
  {
    user: {},
    favorites: [],
  },
  {
    [userLogin.fulfilled]: (state, action) => action.payload,
    [userLogout.fulfilled]: (state, action) => {
      state.user = {};
      return state;
    },
    [userSignUp.fulfilled]: (state, action) => action.payload,
    // [addUser.rejected]: (state, action) => action.payload,
    [addToFavorites.fulfilled]: (state, action) => {
      state.favorites.push(action.payload);
    },
    [removeFromFavorites.fulfilled]: (state, action) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.payload.id
      );
    },
  }
);

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
export default userReducer;
