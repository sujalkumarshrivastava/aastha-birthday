const express = require('express');
const app = express();

app.use(express.static('public')); // serve CSS/JS/images

// Home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});



const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));