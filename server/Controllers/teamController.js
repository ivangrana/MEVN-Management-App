// controllers/teamController.js
const Team = require('../Models/Team');

exports.createTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json(team);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('members');
    res.json(teams);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTeam = await Team.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTeam);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;
    await Team.findByIdAndDelete(id);
    res.json({ message: 'Team deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
