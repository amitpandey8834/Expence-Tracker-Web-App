const Expense = require('../models/Expense');

exports.createExpense = async (req, res) => {
  const { title, amount, category } = req.body;
  try {
    const expense = await Expense.create({ title, amount, category, user: req.user._id });
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ message: 'Could not create expense' });
  }
};

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.user._id });
  res.status(200).json(expenses);
};

exports.updateExpense = async (req, res) => {
  const { id } = req.params;
  const expense = await Expense.findOneAndUpdate({ _id: id, user: req.user._id }, req.body, { new: true });
  if (!expense) return res.status(404).json({ message: 'Expense not found' });
  res.status(200).json(expense);
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  const expense = await Expense.findOneAndDelete({ _id: id, user: req.user._id });
  if (!expense) return res.status(404).json({ message: 'Expense not found' });
  res.status(200).json({ message: 'Deleted successfully' });
};
