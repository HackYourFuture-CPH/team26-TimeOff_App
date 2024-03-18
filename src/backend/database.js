require("dotenv").config();

// create connection
const knex = require("knex")({
  client: "mysql2", 
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
   // ssl: { rejectUnauthorized: false }, This has to be enabled before deploying.
    
  },
  pool: {
    min: 2,
    max: 10
  },
});

// Check that the connection works
knex.raw("SELECT VERSION()").then(() => {
  console.log(`Welldone on getting backend connected you legend!`);
});

module.exports = knex;