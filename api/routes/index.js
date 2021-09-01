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
  /*  Para hacer logout  desarma la cookie o tirar la  sesion local desde el servidor
  password hace las dos a la vez
  en el objeto req deja un metodo logOut() 
  */
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }

  res.send(req.user); // envio usuario
});

//   favorites?userId=${user.id}&movieId=${movieId}`

router.put("/favorites", (req, res) => {
  const { userId, movieId } = req.query;

  console.log("id de usuario: ", userId);
  console.log("id de movie: ", movieId);
  console.log("REQ.BODY ==> ", req.body);

  User.findByPk(userId)
    //.then((user) => console.log("usuario encontrado en BD ", user))
    .then((user) => {
      console.log(user);
      console.log(movieId);
      user.addFavorite(movieId);
    }) //  addFavorite es el magic method
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
