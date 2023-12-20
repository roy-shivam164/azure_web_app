// index.js

const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Set up a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
