const express = require('express');
const router = express.Router();
const Friend = require('../models/Friend');

// Define CRUD operations for friends
// Get all friends
router.get('/', async (req, res) => {
    try {
        const friends = await Friend.find();
        res.json(friends);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new friend
router.post('/', async (req, res) => {
    try {
        const newFriend = await Friend.create(req.body);
        res.status(201).json(newFriend);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Remove a friend by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedFriend = await Friend.findByIdAndDelete(req.params.id);
        if (!deletedFriend) {
            return res.status(404).json({ message: 'Friend not found' });
        }
        res.json({ message: 'Friend deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;