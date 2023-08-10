// routes/teamRoutes.js
const express = require('express');
const router = express.Router();
const teamController = require('../Controllers/teamController');

router.post('/team', teamController.createTeam);
router.get('/team', teamController.getAllTeams);
router.put('/team/:id', teamController.updateTeam);
router.delete('/team/:id', teamController.deleteTeam);

module.exports = router;
