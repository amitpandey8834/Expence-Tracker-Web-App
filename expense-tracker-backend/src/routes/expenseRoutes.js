const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { createExpense, getExpenses, updateExpense, deleteExpense } = require('../controllers/expenseController');

router.use(protect);
router.post('/', createExpense);
router.get('/', getExpenses);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

module.exports = router;
