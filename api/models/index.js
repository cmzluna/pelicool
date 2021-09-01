const User = require("./User.js");
const Movie = require("./Movie.js");

User.belongsToMany(Movie, { as: "favorites", through: "favorites_movies" });
Movie.belongsToMany(User, { as: "favorites", through: "favorites_movies" });

module.exports = { User, Movie };
