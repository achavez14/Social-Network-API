const express = require('express');
const router = express.Router();
const Reaction = require('../models/Reaction');

// Get all reactions
router.get('/', async (req, res) => {
    try {
        const reactions = await Reaction.find();
        res.json(reactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new reaction
router.post('/', async (req, res) => {
    try {
        const newReaction = await Reaction.create(req.body);
        res.status(201).json(newReaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Remove a reaction by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedReaction = await Reaction.findByIdAndDelete(req.params.id);
        if (!deletedReaction) {
            return res.status(404).json({ message: 'Reaction not found' });
        }
        res.json({ message: 'Reaction deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;