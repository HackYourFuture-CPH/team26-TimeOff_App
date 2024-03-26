const express = require("express");
const router = express.Router();
const knex = require("../database");

//Week- 3

//Returns all members. api/members
router.get('/', async (req, res) => {
  try {
    const allTeams = await knex.select('*').from('team');
    res.json(allTeams); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});

router.post("/", async (request, response) => {
  const addTeam = request.body;
  addTeam.created_date = new Date();

  try {
    await knex("team").insert(addTeam);
    response.status(201).json("New team has been added");
  } catch (error) {
    console.error(error); 
    response.status(500).json({ error: "Failed to add a new meal" });
  }
});

module.exports = router;



// const express = require('express');
// const cors = require('cors');
// const db = require('../database');

// const app = express();

// app.use(cors({
//   origin: 'http://localhost:4051', 
//   methods: ['GET', 'POST'], 
//   credentials: true 
// }));

// app.use(express.json()); 

// app.get('/', async (req, res) => {
//   try {
//     const teams = await db.select().from('team'); 
//     res.json(teams);
//   } catch (error) {
//     console.error('Error fetching teams:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.post('/api/teams', async (req, res) => {
//   try {
//     const { title, code } = req.body; // Aquí se espera que el campo se llame 'title'
//     const creationDate = new Date();
//     await db('team').insert({ title, code, created_date: creationDate }); // Insertar 'title' en lugar de 'name'
//     res.status(201).json({ message: 'Team created successfully' });
//   } catch (error) {
//     console.error('Error creating team:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = app;