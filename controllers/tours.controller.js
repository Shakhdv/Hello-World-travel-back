const Tour = require("../models/Tour.model");

module.exports.toursController = {
  getTours: async (req, res) => {
    try {
      const getTours = await Tour.find();
      res.json(getTours);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addTour: async (req, res) => {
    try {
      const { name, regionName, descr, price, categoryName, rating } = req.body;
      const { image } = req.file.path;
      const newTour = await Tour.create({
        name,
        regionName,
        descr,
        price,
        image,
        categoryName,
        rating,
      });
      res.json(newTour);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  getTourById: async (req, res) => {
    try {
      const getOneTour = Tour.findById(req.params.id);
      res.json(getOneTour);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
