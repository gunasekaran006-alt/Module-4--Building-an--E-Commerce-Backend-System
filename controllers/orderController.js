const Order = require('../models/order');

exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create({ ...req.body, user: req.user._id });
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};