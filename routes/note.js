const express = require('express');
const Note = require('../models/Note');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Middleware to Authenticate Token
const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: 'Invalid token' });
    }
};

// Get Notes
router.get('/', authenticate, async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user.id });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
});

// Create Note
router.post('/', authenticate, async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content, userId: req.user.id });
        await note.save();
        res.status(201).json(note);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create note' });
    }
});

module.exports = router;
