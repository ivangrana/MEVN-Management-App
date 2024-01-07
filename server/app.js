const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const noteRoutes = require('./Routes/noteRoutes');
const teamRoutes = require('./Routes/TeamRoutes');
const taskRoutes = require('./Routes/TaskRoutes');

const app = express();
app.use(cors());
const port = 3000;
const mongoURL = ''; // Replace with your MongoDB connection URL

// Connect to MongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully');
}).catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
  process.exit(1);
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use(teamRoutes);
app.use(noteRoutes);
app.use(taskRoutes);

// Start the server
app.listen(port, "192.168.15.14", () => {
  console.log(`Server listening on port ${port}`);
});
