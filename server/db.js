const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.APP_USERNAME,
  password: "password",
  host: process.env.APP_HOST,
  port: process.env.APP_DBPORT,
  database: "todoapp",
});

module.exports = pool;
