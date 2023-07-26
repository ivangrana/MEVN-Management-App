const Note = require('../Models/Note');

// Create a new note
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await Note.create({ title, content });
    res.status(201).json(newNote);
  } catch (error) {
    console.error('Failed to create note !', error);
    res.status(500).json({ error: 'Failed to create note' });
  }
};

// Get all notes
exports.getAllNotes = async (req, res) => {
  try {
    const request = req.body;
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.error('Failed to fetch notes !', error);
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
};

// Get a specific note by ID
exports.getNoteById = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await Note.findById(noteId);
    if (!note) {
      res.status(404).json({ error: 'Note not found' });
    } else {
      res.json(note);
    }
  } catch (error) {
    console.error('Failed to fetch note:', error);
    res.status(500).json({ error: 'Failed to fetch note' });
  }
};

// Update a note by ID
exports.updateNoteById = async (req, res) => {
  try {
    const noteId = req.params.id;
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(noteId, { title, content }, { new: true });
    if (!updatedNote) {
      res.status(404).json({ error: 'Note not found' });
    } else {
      res.json(updatedNote);
    }
  } catch (error) {
    console.error('Failed to update note:', error);
    res.status(500).json({ error: 'Failed to update note' });
  }
};

// Delete a note by ID
exports.deleteNoteById = async (req, res) => {
  try {
    const noteId = req.params.id;
    const deletedNote = await Note.findByIdAndDelete(noteId);
    if (!deletedNote) {
      res.status(404).json({ error: 'Note not found' });
    } else {
      res.json({ message: 'Note deleted successfully' });
    }
  } catch (error) {
    console.error('Failed to delete note:', error);
    res.status(500).json({ error: 'Failed to delete note' });
  }
};
