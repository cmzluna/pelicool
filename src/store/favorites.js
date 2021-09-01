import { createAction, createReducer } from "@reduxjs/toolkit";

// la accion define que es lo que va a pasar
export const addFav = createAction("set fav");
const deleteFav = createAction("del fav");

// action creator
// setAirports = { type: 'add', payload: ''}

//setAirports devuelve el TYPE al hacer toString

const favoritesReducer = createReducer([], {
  [addFav]: (state, action) => [...state, action.payload],
  [deleteFav]: (state, action) => [...state, action.payload],
});

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
