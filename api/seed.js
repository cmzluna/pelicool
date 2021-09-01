// run seed

// cerra el proceso una vez completado con:
// process.exit();

// const faker = require("faker");

const db = require("./config/db");

const { Movie, User } = require("./models");

const setupSeed = async () => {
  console.log("SEED STARTING");

  // CREATE Movie
  console.log("SEED movie");
  const moviePromise = Movie.create({
    name: "Inception",
  });

  // CREATING USER
  console.log("SEED user");
  const userPromise = User.create({
    name: "Tom Hanks",
    email: "tom@hanks.com",
    password: "tommy",
  });

  return Promise.all([moviePromise, userPromise]);
};

db.sync()
  .then(setupSeed)
  .then(() => process.exit(0))
  .catch((err) => {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
  });
