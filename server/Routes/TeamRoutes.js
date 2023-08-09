// routes/teamRoutes.js
const express = require('express');
const router = express.Router();
const teamController = require('../Controllers/teamController');

router.post('/', teamController.createTeam);
router.get('/', teamController.getAllTeams);
router.put('/:id', teamController.updateTeam);
router.delete('/:id', teamController.deleteTeam);

module.exports = router;
