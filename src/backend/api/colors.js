const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns all colors. api/colors
router.get('/', async (req, res) => {
  try {
    const allColors = await knex.select('*').from('member_color');
    res.json(allColors); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});

module.exports = router;
