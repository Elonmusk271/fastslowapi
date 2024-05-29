const express = require('express');
const app = express();
const port = 3000;

// Middleware to simulate delay
function delayMiddleware(req, res, next) {
    setTimeout(next, 2000); // Simulating 2 seconds delay
}

// Endpoint that responds quickly
app.get('/fast', (req, res) => {
    res.send('This is the fast endpoint');
});
app.get('/test', (req, res) => {
    res.send('This is the testing api ');
});

// Endpoint that responds after some delay
app.get('/slow', delayMiddleware, (req, res) => {
    res.send('This is the slow endpoint');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
