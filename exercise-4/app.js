const express = require('express');
const characterController = require('./controllers/characterController');

const app = express();
const PORT = 8080;

app.use(express.json());

// Routes
app.get('/api/characters', characterController.getCharacters);
app.get('/api/characters/:characterId', characterController.getCharacterById);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});