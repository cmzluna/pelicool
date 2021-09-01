import React from "react";
import { Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import MovieDetails from "./MovieDetails";
import { addToFavorites } from "../store/users";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import { useEffect, useState } from "react";

const Movies = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.movies.moviesList);
  const useStyles = makeStyles({
    root: {
      maxWidth: 250,
      minWidth: 180,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container maxWidth="md">
      <div>
        <h3>Films list</h3>
      </div>

      <Grid container spacing={3} className="movie-app">
        {moviesList?.map((movie) => (
          <Grid item xs={6} sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <Link className="thumbnail" to={`/movies/${movie.imdbID}`}>
                  {/* onClick dispatchear selectedMovie al estado Global 
                  y tomarla desde MovieDetails llamando a useSelector pidiendole al global */}

                  {movie.Poster === "N/A" ? (
                    <CardMedia
                      component="img"
                      alt="Poster not Available"
                      height="140"
                      image="notavailable.png"
                      title="Poster not Available"
                    />
                  ) : (
                    <CardMedia
                      component="img"
                      alt={`${movie.Title}`}
                      height="140"
                      image={`${movie.Poster}`}
                      title={`${movie.Title}`}
                    />
                  )}
                </Link>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {movie.Title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <br />
                    Released: {movie.Year}
                    <br />
                    Type: {movie.Type}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon
                    onClick={() => dispatch(addToFavorites(movie))}
                  />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Movies;
