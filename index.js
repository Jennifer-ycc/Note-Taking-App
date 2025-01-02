const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse JSON payloads
app.use(express.static('public')); // Serve static files

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Serve static files for front-end
const rootPath = path.join(__dirname, 'pages');

// Routes for static pages
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: rootPath });
});

app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: rootPath });
});

app.get('/signup', (req, res) => {
    res.sendFile('signup.html', { root: rootPath });
});

// API Routes
const userRoutes = require('./routes/user');
const noteRoutes = require('./routes/note');

app.use('/api/users', userRoutes); // User Authentication Routes
app.use('/api/notes', noteRoutes); // Notes Management Routes

// 404 Page Not Found
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
