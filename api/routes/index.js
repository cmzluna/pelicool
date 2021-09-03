const express = require("express");
const passport = require("passport");
const { User, Movie } = require("../models");
const router = express.Router();

router.post("/signup", (req, res) => {
  console.log(req.body);
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

/* en passport.authenticate esta la busqueda por Sequelize del usuario, y faltaria agregar el include Favorites 
en caso que no se loguee devuelve un 401

 Passport popula el req.user con el usuario

 una vez que se crea cualquier otra ruta en la que passport intervenga, podemos acceder a la variable REQ.USER 

*/

router.get("/secret", (req, res) => {
  if (req.user) {
    res.send("cake.jpg");
  } else {
    res.sendStatus(401);
  }
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
  /*  Para hacer logout  desarma la cookie o tirar la  sesion local desde el servidor
  password hace las dos a la vez
  en el objeto req deja un metodo logOut() 
  */
});

router.get("/me", (req, res) => {
  console.log("holaaaaaaaa", req);
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user); // envio usuario
});

//   favorites?userId=${user.id}&movieId=${movieId}`

router.get("/favorites", (req, res) => {
  const { userId } = req.query;
  console.log("id de usuario: ", userId);

  Movie.findAll({
    include: {
      model: User,
      as: "favorites",

      where: {
        userId: parseInt(userId),
      },
    },
  }).then((favs) => console.log(favs));

  /*
  through: {
          where: {
            // Here, `completed` is a column present at the junction table
            userId: userId,
          },
        },
        
        */
  // console.log(favs[0].dataValues)
  // .then((favs) => res.send(favs["Movies"]))
  // .catch((error) => res.status(500).send(error));
});

/* previa version
router.get("/favorites", (req, res) => {
  const { userId } = req.query;
  console.log("id de usuario: ", userId);

  Movie.findAll({
    where: {
      id: userId,
    },
    include: { model: Movie, as: "favorites", through: "favorites_movies" },
  })
    .then((favs) => res.send(favs))
    .catch((error) => res.status(500).send(error));
});
*/
router.put("/favorites", (req, res) => {
  const { userId, movieId } = req.query;

  const newFav = Movie.build(req.body);
  // tengo que user 'build' ya que de usar 'create' intentaria generar un registro que ya esta repetido en la tabla 'movies', por lo que envia error de Server tipo 500

  User.findByPk(userId)
    .then((user) => {
      console.log(user);
      console.log(movieId);
      user.addFavorite(newFav);
    })
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).send("Already added"));
});

router.delete("/favorites", (req, res) => {
  const { userId, movieId } = req.query;
  User.findByPk(userId)
    .then((user) => user.removeFavorite(movieId))
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
