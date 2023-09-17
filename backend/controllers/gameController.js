const Game = require('../models/Game');

const gameController = {
  getAllGames: async (req, res) => {
    try {
      const games = await Game.find();
      res.status(200).json(games);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getGameById: async (req, res) => {
    try {
      const game = await Game.findById(req.params.id);
      if (!game) {
        return res.status(404).json({ message: 'Game not found' });
      }
      res.status(200).json(game);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createGame: async (req, res) => {
    try {
      const game = new Game(req.body);
      await game.save();
      res.status(201).json(game);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateGame: async (req, res) => {
    try {
      const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!game) {
        return res.status(404).json({ message: 'Game not found' });
      }
      res.status(200).json(game);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteGame: async (req, res) => {
    try {
      const game = await Game.findByIdAndDelete(req.params.id);
      if (!game) {
        return res.status(404).json({ message: 'Game not found' });
      }
      res.status(200).json({ message: 'Game deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = gameController;