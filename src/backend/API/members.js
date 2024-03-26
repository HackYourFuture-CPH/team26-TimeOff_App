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

app.get('/api/members', async (req, res) => {
    try {
      const { teamCode } = req.query;
      const members = await db.select().from('members').where({ team_code: teamCode });
      res.json(members);
    } catch (error) {
      console.error('Error fetching members:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/members', async (req, res) => {
    try {
      const { first_name, last_name } = req.body; 
      const creationDate = new Date();
      await db('members').insert({ first_name, last_name, created_date: creationDate }); 
      res.status(201).json({ message: 'New member created successfully' });
    } catch (error) {
      console.error('Error creating member:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = app;
