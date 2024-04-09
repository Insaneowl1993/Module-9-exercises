const axios = require('axios');
const Character = require('../models/Character');

const getCharacters = async (req, res) => {
  const page = req.query.page || 1;

  try {
    const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    const characters = response.data.results.map(character => new Character(character.name, character.height, character.mass));
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getCharacterById = async (req, res) => {
  const characterId = req.params.characterId;

  try {
    const response = await axios.get(`https://swapi.dev/api/people/${characterId}`);
    const characterData = response.data;
    const character = new Character(characterData.name, characterData.height, characterData.mass);
    res.json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getCharacters,
  getCharacterById,
};