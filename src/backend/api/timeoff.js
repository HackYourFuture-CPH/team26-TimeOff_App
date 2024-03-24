const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns all timeoffs.
router.get('/all-timeoffs', async (req, res) => {
    try {
        const allTimeoffs = await knex.select("*").from("time_off");
        res.json(allTimeoffs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
    }
});

// Returns all timeoffs for a specific member.
router.get("/member/:member_id/timeoffs", async (req, res) => {
    const { member_id } = req.params;

    try {
        console.log("Fetching timeoffs for member ID:", member_id);
        const timeoffs = await knex("time_off").select("*").where({ member_id });
        res.json(timeoffs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to retrieve timeoffs for the specified member" });
    }
});

// Updates the timeoff by id.
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedTimeoff = req.body;

    try {
        const existingTimeoff = await knex("time_off").select("*").where({ id }).first();
        if (!existingTimeoff) {
            return res.status(404).json({ error: "Timeoff not found" });
        }

        await knex("time_off").where({ id }).update(updatedTimeoff);

        res.json({ message: "Timeoff updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update the timeoff" });
    }
});

// Deletes the timeoff by id.
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const timeoff = await knex("time_off").select("*").where({ id }).first();
        if (!timeoff) {
            return res.status(404).json({ error: "Timeoff not found" });
        }

        await knex("time_off").where({ id }).del();
        res.json({ message: "Timeoff deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error deleting timeoff" });
    }
});

module.exports = router;
