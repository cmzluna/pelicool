// server configs
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const path = require("path");
const Models = require("./models");
const db = require("./config/db");
const app = express();
// Express Route File Requires
const routes = require("./routes");
const cors = require("cors");

app.use(express.json()); // suplanta body-parser
app.use(cookieParser());
app.use(sessions({ secret: "omdb", resave: true, saveUninitialized: true }));
//Con esto ya tendre disponible la variable req.session, y también un id único para la sesión de un usuario que podemos acceder mediante la variable  req.sessionID.

app.use(passport.initialize());
app.use(passport.session()); // trabajamos con sesiones y vincula a express-session
app.use(cors());
app.use("/api", routes);
//app.use(express.static(path.resolve(__dirname, "/public")));

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      Models.User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            // email not found
            return done(null, false);
            // 1 si hubo error o no
            // 2 si esta autenticada o no
          }

          user.hash(password, user.salt).then((hash) => {
            //re hasheo el password que ingresa el usuario
            if (hash !== user.password) {
              return done(null, false); // wrong password
            }

            return done(null, user); // success :D
          });
        })
        .catch(done); // done(err)
    }
  )
);
// luego de esto tengo que decirle a Passport como tiene que trabajar la sesion: crear cookie y guardar en Express-session  una sesion para el user

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
// que queremos tomar del usuario para guardar en la sesion

passport.deserializeUser(function (id, done) {
  User.findByPk(id) // busco el usuario
    .then((user) => {
      return done(null, user);
    });
  //.catch(done);
});
// una vez que llegue un nuevo pedido que a traves de la sesion tengamos que recuperar el usuario

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
  app.get("/", function (request, response) {
    response.send("Hello World!");
  });

  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "build", "index.html"));
  // });
}

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log("Server running at port", port);
  });
});

// User.sync({ force: false }).then(() => {
//   http.createServer(app).listen(3001, () => {
//     console.log(`Server listening at port ${config.port}`);
//   });
// });
