const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();

app.use(cors({
  origin: 'http://localhost:4051', 
  methods: ['GET', 'POST'], 
  credentials: true 
}));

app.get('/api/teams', async (req, res) => {
  try {
    const teams = await db.select().from('team'); 
    res.json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
