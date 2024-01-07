const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const noteRoutes = require('./Routes/noteRoutes');
const teamRoutes = require('./Routes/TeamRoutes');
const taskRoutes = require('./Routes/TaskRoutes');

const app = express();

const port = 3000;
const mongoURL = 'mongodb+srv://ivangrana:4hkbgp3r@cluster0.eoomwko.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URL

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
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
