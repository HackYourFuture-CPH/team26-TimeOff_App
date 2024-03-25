const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../database');
const router = express.Router();

router.post('/', async (req, res) => {
  const { team_code } = req.body;

  try {
    const team = await db.select().from('teams').where('team_code', team_code).first();

    if (!team) {
      return res.status(401).json({ error: 'Invalid team code' });
    }

    const token = jwt.sign({ teamId: team.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
