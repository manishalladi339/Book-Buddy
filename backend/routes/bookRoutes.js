const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Routes for getting, creating, updating, and deleting books
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
