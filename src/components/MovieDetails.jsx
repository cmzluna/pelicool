import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { addToFavorites } from "../store/favorites";

const MovieDetails = ({ props }) => {
  console.log(props.match.params.id);
  const dispatch = useDispatch();
  const movieId = props.match.params.id;

  const movie = useSelector((state) => state.movies.selectedMovie);
  const {
    Actors,
    Title,
    Awards,
    Country,
    Director,
    Genre,
    Language,
    Poster,
    Plot,
    Ratings,
    Released,
    Type,
    Year,
    Writer,
    imdbRating,
  } = movie;

  //  const favorites = useSelector((state) => state.favorites);

  //      hacer estado local para pelicula seleccionada.

  // useEffect(() => {
  //   console.log(selectedMovie);
  // }, [selectedMovie]);

  // tomo estado de redux con favorita

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

  // FALTA CONSEGUIR POSTER
  return (
    <div className="movieDetailsContainer">
      <div className="movieDetailsBox">
        <Card className={classes.root}>
          <CardActionArea>
            <Link className="thumbnail" to={`/movies/${Title}`}>
              {Poster === "N/A" ? (
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
                  alt={`${Title}`}
                  height="400"
                  image={`${Poster}`}
                  title={`${Title}`}
                />
              )}
            </Link>

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {Title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Director: {Director} <br />
                Actors: {Actors}
                <br />
                Awards: {Awards}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon onClick={() => dispatch(addToFavorites(movie))} />
            </IconButton>
          </CardActions>
        </Card>
      </div>

      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Plot
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {Plot}
            </Typography>
            <Typography variant="body2" component="p">
              Genre:
              {Genre} <br />
            </Typography>
            <Typography variant="body2" component="p">
              Country:
              {Country} <br />
            </Typography>
            <Typography variant="body2" component="p">
              Language:
              {Language} <br />
            </Typography>
            <Typography variant="body2" component="p">
              Awards:
              {Awards} <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default MovieDetails;
