const Order = require("../models/Order.model");

module.exports.orderController = {
  addOrders: async (req, res) => {
    try {
      const { name, phone, message } = req.body;
      const newOrder = await Order.create({
        name,
        phone,
        message,
      });
      res.json(newOrder);
    } catch (err) {
      res.json({ err: err.message });
    }
  },
  getOrders: async (req, res) => {
    try {
      const getOrders = await Order.find();
      res.json(getOrders);
    } catch (err) {
      res.json({ err: err.message });
    }
  },
};
