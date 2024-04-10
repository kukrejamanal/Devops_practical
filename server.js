const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Dummy data to simulate a database
let messages = [];

// API routes
app.get('/api/messages', (req, res) => {
    res.json(messages);
});

app.post('/api/messages', (req, res) => {
    const { name, email, message } = req.body;
    if (name && email && message) {
        const newMessage = { name, email, message };
        messages.push(newMessage);
        res.status(201).json(newMessage);
    } else {
        res.status(400).json({ error: 'Please provide name, email, and message' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
