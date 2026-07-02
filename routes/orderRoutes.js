const express = require('express');
const router = express.Router();
const { createOrder, getOrders } = require('../controllers/orderController');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

router.post('/', protect, authorizeRoles('user', 'admin'), createOrder);
router.get('/', protect, authorizeRoles('user', 'admin'), getOrders);

module.exports = router;