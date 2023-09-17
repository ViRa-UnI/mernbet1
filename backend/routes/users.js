const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Route for getting all users
router.get('/', authMiddleware.authenticateToken, userController.getAllUsers);

// Route for getting a specific user
router.get('/:id', authMiddleware.authenticateToken, userController.getUserById);

// Route for creating a new user
router.post('/', userController.createUser);

// Route for updating a user
router.put('/:id', authMiddleware.authenticateToken, userController.updateUser);

// Route for deleting a user
router.delete('/:id', authMiddleware.authenticateToken, userController.deleteUser);

module.exports = router;