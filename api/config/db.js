const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("omdb", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
