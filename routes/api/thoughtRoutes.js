const express = require('express');
const router = express.Router();
const Thought = require('../models/Thought');

// Get all thoughts
router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single thought by ID
router.get('/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new thought
router.post('/', async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        res.status(201).json(newThought);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a thought by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(updatedThought);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a thought by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.id);
        if (!deletedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json({ message: 'Thought deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;