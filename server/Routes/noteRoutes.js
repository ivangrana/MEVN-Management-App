const express = require('express');
const router = express.Router();
const noteController = require('../Controllers/noteController');

router.post('/api/notes', noteController.createNote);
router.get('/api/notes', noteController.getAllNotes);
router.get('/api/notes/:id', noteController.getNoteById);
router.put('/api/notes/:id', noteController.updateNoteById);
router.delete('/api/notes/:id', noteController.deleteNoteById);

module.exports = router;
