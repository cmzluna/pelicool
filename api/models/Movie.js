const Sequelize = require("sequelize");
const sequelize = require("../config/db.js");

class Movie extends Sequelize.Model {}

Movie.init(
  {
    Title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Poster: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Year: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imdbID: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },

    //
  },
  { sequelize, modelName: "movies" }
);

module.exports = Movie;
