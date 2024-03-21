const knex = require('knex');
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const knexConfig = {
  client: 'pg', 
  connection: {
    host: PGHOST,
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
    ssl: {
      rejectUnauthorized: false 
    },
    port: 5432,
  },
};

const db = knex(knexConfig);

module.exports = db;
