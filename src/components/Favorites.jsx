import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedMovie } from "../store/movies";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { addToFavorites, removeFromFavorites } from "../store/favorites";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";

export default function Favorites() {
  // why dispatch here ?: hooks lint rules do not know that dispatch should be stable, and will warn that the dispatch variable should be added to dependency arrays for useEffect and useCallback.

  const dispatch = useDispatch();
  const favoritesList = useSelector((state) => state.favorites);

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
    favoriteButton: {
      color: "#f50057",
    },
  });
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  function handleToggleFavorite(movie) {
    if (favoritesList.includes(movie)) {
      console.log("=== TOGGLING MOVIE FROM FAVORITES === ", movie);
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
  }

  //  JSON.stringify(list[i]) === JSON.stringify(obj)

  return (
    <Container maxWidth="md">
      <div>
        <h3>These are your Favorites ... </h3>
      </div>

      <Grid container spacing={3} className="movie-app">
        {favoritesList?.map((movie) => (
          <div key={movie.imdbID}>
            <Grid item xs={6} sm={4}>
              <Card className={classes.root}>
                <Link className="thumbnail" to={`/movies/${movie.imdbID}`}>
                  <CardActionArea
                    onClick={() => dispatch(addSelectedMovie(movie.imdbID))}
                  >
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
                </Link>

                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon
                      className={classes.favoriteButton}
                      onClick={() => handleToggleFavorite(movie)}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </div>
        ))}
      </Grid>
    </Container>
  );
}
