const express = require('express');
const cors = require('cors');
const db = require('../database');
const app = express();
app.use(cors({
  origin: 'http://localhost:4051', 
  methods: ['GET', 'POST'], 
  credentials: true 
}));
app.use(express.json()); 

app.get('/api/teams', async (req, res) => {
  try {
    const teams = await db.select().from('teams'); 
    res.json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/teams', async (req, res) => {
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
module.exports = app;