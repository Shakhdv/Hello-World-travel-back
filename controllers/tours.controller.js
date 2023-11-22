const Tour = require("../models/Tour.model");

module.exports.toursController = {
  getTours: async (req, res) => {
    try {
      const getTours = await Tour.find().populate([
        "regionName",
        "categoryName",
      ]);
      res.json(getTours);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addTour: async (req, res) => {
    try {
      const {
        name,
        regionName,
        descr,
        price,
        categoryName,
        rating,
        firstDay,
        secondDay,
        thirdDay,
        transport,
        length,
        firstDayDescr,
        secondDayDescr,
        thirdDayDescr,
      } = req.body;
      const newTour = await Tour.create({
        name,
        regionName,
        descr,
        price,
        image: req.file.path,
        categoryName,
        rating,
        firstDay,
        secondDay,
        thirdDay,
        transport,
        length,
        firstDayDescr,
        secondDayDescr,
        thirdDayDescr,
        firstDayImg: req.file.path,
        secondDayImg: req.file.path,
        thirdDayImg: req.file.path,
      });
      res.json(newTour);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  getTourById: async (req, res) => {
    try {
      const getOneTour = Tour.findById(req.params.id).populate(
        "regionName",
        "categoryName"
      );
      res.json(getOneTour);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
