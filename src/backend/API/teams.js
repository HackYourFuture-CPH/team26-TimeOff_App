const express = require('express');
const db = require('../database');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const teams = await db.select().from('teams');
    res.json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { team_name, team_code } = req.body;
    const creationDate = new Date();
    await db('teams').insert({ team_name, team_code, created_date: creationDate });
    res.status(201).json({ message: 'Team created successfully' });
  } catch (error) {
    console.error('Error creating team:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
