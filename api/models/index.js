const User = require("./User.js");
const Movie = require("./Movie.js");

User.belongsToMany(Movie, {
  as: "favorites",
  through: "favorites_movies",
  constraints: false,
  onDelete: "cascade",
  onUpdate: "cascade",
  foreignKey: "movieId",
});
Movie.belongsToMany(User, {
  as: "favorites",
  through: "favorites_movies",
  constraints: false,
  onDelete: "cascade",
  onUpdate: "cascade",
  foreignKey: "userId",
});

module.exports = { User, Movie };
