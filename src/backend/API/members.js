const express = require("express");
const router = express.Router();
const db = require("../database");

router.get('/', async (req, res) => {
  try {
    const allMembers = await db.select('*').from('members');
    res.json(allMembers); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});

router.post("/", async (request, response) => {
  const addMember = request.body;
  addMember.created_date = new Date();

  try {
    await db("members").insert(addMember);
    response.status(201).json("New member has been added");
  } catch (error) {
    console.error(error); 
    response.status(500).json({ error: "Failed to add a new member" });
  }
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;
  console.log("Member ID Before try", id);

  try {
    const member = await db("members").select("*").where({ id }).first();
    console.log("Member ID logging out");
    if (member) {
      response.json(member);
    } else {
      response.status(404).json({ error: "Member not found" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Failed to retrieve the member" });
  }
});

module.exports = router;
