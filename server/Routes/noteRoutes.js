const express = require('express');
const router = express.Router();
const noteController = require('../Controllers/noteController');

router.post('/', noteController.createNote);
router.get('/', noteController.getAllNotes);
router.get('/:id', noteController.getNoteById);
router.put('/:id', noteController.updateNoteById);
router.delete('/:id', noteController.deleteNoteById);

module.exports = router;
