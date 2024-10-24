const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, Images, JS) from the project directory
app.use(express.static(__dirname));

// GET request to serve the main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve the HTML file
});

// POST request to handle form submissions
app.post('/submit-form', (req, res) => {
    const name = req.body.name;  
    const email = req.body.email; 
    const message = req.body.message;

    // Send a confirmation message back to the user
    res.send(`Form submitted successfully! <br> Name: ${name} <br> Email: ${email} <br> Message: ${message}`);
});

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});