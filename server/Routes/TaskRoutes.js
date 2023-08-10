// routes/TaskRoutes.js
const express = require('express');
const router = express.Router();
const TaskController = require('../Controllers/taskController');

router.post('/task', TaskController.createTask);
router.get('/task', TaskCosntroller.getAllTask);
router.put('/task/:id', TaskController.updateTask);
router.delete('/task/:id', TaskController.deleteTask);

module.exports = router;
