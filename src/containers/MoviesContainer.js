import React from "react";
import axios from "axios";
import SearchInput from "../components/SearchInput";
import Movies from "../components/Movies";
import { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMoviesList } from "../store/movies";
import MovieDetails from "../components/MovieDetails";

const MoviesContainer = (props) => {
  // const [movies, setMovies] = useState({
  //   totalResults: 0,
  //   moviesList: [],
  // });
  // pasar a global listado total de peliculas

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (input !== "") {
      axios
        .get(`https://www.omdbapi.com/?apikey=20dac387&s=${input}`)
        .then((res) => {
          const [moviesList, totalResults] = [
            res.data.Search,
            res.data.totalResults,
          ];
          console.log("MOVIES_LIST ==> ", moviesList);

          //   setMovies({ totalResults, moviesList });
          dispatch(addMoviesList(moviesList));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [input]);

  function handleChange(evt) {
    const value = evt.target.value;
    console.log(input);
    setInput(value);
    console.log(input);
  }

  return (
    <div>
      <SearchInput handleChange={handleChange} />
      <Movies />
    </div>
  );
};

export default MoviesContainer;
