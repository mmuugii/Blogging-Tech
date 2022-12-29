const router = require('express').Router();
const userRoutes = require('./userRoutes');
const incomeRoutes = require('./incomeRoutes');
const expensesRoutes = require('./expensesRoutes');

router.use('/users', userRoutes);
router.use('/income', incomeRoutes);
router.use('/expenses', expensesRoutes);

module.exports = router;