const Sequelize = require("sequelize");
const sequelize = require("../config/db.js");

class Movie extends Sequelize.Model {}

Movie.init(
  {
    name: {
      type: Sequelize.STRING,
      //allowNull: false,
    },

    //
  },
  { sequelize, modelName: "movies" }
);

module.exports = Movie;
