const express = require('express');
const path = require('path');

const app = express();
const port = 3017;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle requests for the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
