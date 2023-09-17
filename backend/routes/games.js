const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all games
router.get('/', gameController.getAllGames);

// Get game by ID
router.get('/:id', gameController.getGameById);

// Create a new game
router.post('/', authMiddleware, gameController.createGame);

// Update game by ID
router.put('/:id', authMiddleware, gameController.updateGameById);

// Delete game by ID
router.delete('/:id', authMiddleware, gameController.deleteGameById);

module.exports = router;