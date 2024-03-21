const express = require("express");
const router = express.Router();
const knex = require("../database");

//Week- 3

//Returns all members. api/members
router.get('/', async (req, res) => {
  try {
    const allMembers = await knex.select('*').from('member');
    res.json(allMembers); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});

module.exports = router;
