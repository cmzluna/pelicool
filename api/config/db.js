require("dotenv");
const { Sequelize } = require("sequelize");

// checks if env is Heroku, if so, sets sequelize to utilize the database hosted on heroku

// if (process.env.DATABASE_URL) {
// the application is executed on Heroku ... use the postgres database
const sequelize = new Sequelize(process.env.DATABASE_URL, null, null, {
  dialect: "postgres",
  protocol: "postgres",
});

// } else {
//   const sequelize = new Sequelize("omdb", null, null, {
//     host: "localhost",
//     dialect: "postgres",
//     logging: false,
//   });
// }

module.exports = sequelize;
