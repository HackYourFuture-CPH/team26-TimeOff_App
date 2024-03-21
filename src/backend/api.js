const express = require('express');
const db = require('./database'); 

const app = express();

app.get('/api/teams', async (req, res) => {
  try {
    const teams = await db.select().from('member'); 
    res.json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
