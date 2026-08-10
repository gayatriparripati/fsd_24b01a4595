const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Welcome SVECW! You Have Reached the Home Page');
});
app.get('/about', (req, res) => {
    res.send(
        'This server was built as a learning exercise for Express.js by Gayatri'
    );
});
app.get('/api/status', (req, res) => {
    res.json({
        active: true,
        version: '1.0.0',
        message: 'The server is Healthy and responding'
    });
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Press CTRL+C to stop the server');
});