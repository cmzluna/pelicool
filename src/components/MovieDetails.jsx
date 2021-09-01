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

import { makeStyles } from "@material-ui/core/styles";
import { addToFavorites } from "../store/users";

const MovieDetails = ({ props }) => {
  console.log(props.match.params.id);
  const dispatch = useDispatch();
  const movieId = props.match.params.id;

  //  const favorites = useSelector((state) => state.favorites);

  //      hacer estado local para pelicula seleccionada.

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=20dac387&i=${movieId}`)
      .then(({ data }) => {
        const [actors, country, title] = [
          data.Actors,
          data.Country,
          data.Title,
        ];
        console.log("data=> ", data);
        console.log(actors);
        console.log(country);
        console.log(title);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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

  return (
    <>
      <p>under construction </p>
    </>
    // <Container maxWidth="md">
    //   <div>
    //     <h3>movie selected:</h3>
    //   </div>

    //   <Card className={classes.root}>
    //     <CardActionArea>
    //       <Link className="thumbnail" to={`/movies/${title}`}>
    //         {poster === "N/A" ? (
    //           <CardMedia
    //             component="img"
    //             alt="Poster not Available"
    //             height="140"
    //             image="notavailable.png"
    //             title="Poster not Available"
    //           />
    //         ) : (
    //           <CardMedia
    //             component="img"
    //             alt={`${title}`}
    //             height="140"
    //             image={`${title}`}
    //             title={`${title}`}
    //           />
    //         )}
    //       </Link>

    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           {title}
    //         </Typography>
    //         <Typography variant="body2" color="textSecondary" component="p">
    //           <br />
    //           Actors: {actors}
    //           <br />
    //           Plot: {title}
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions disableSpacing>
    //       <IconButton aria-label="add to favorites">
    //         <FavoriteIcon onClick={() => dispatch(addToFavorites(movie))} />
    //       </IconButton>
    //     </CardActions>
    //   </Card>
    // </Container>
  );
};

export default MovieDetails;
