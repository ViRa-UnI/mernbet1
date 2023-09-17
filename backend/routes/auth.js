const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Route for user registration
router.post('/register', authController.register);

// Route for user login
router.post('/login', authController.login);

// Route for user logout
router.get('/logout', authMiddleware.authenticate, authController.logout);

module.exports = router;