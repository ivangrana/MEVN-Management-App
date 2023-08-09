const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const noteRoutes = require('./Routes/noteRoutes');
const teamRoutes = require('./Routes/TeamRoutes');


const app = express();
const port = 3000;
const mongoURL = 'mongodb+srv://ivangrana:<password>@cluster0.cuyssgi.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URL

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
app.use('/api/notes', noteRoutes);
app.use('/api/teams', teamRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
