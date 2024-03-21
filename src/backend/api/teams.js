const express = require("express");
const router = express.Router();
const knex = require("../database");

//Week- 3

// Returns all teams. api/teams
router.get('/', async (req, res) => {
  try {
    const allTeams = await knex.select('*').from('team');
    res.json(allTeams); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});

module.exports = router;
