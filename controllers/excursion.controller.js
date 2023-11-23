const Excursion = require("../models/Excursion.model");

module.exports.excursionController = {
  getExcursions: async (req, res) => {
    try {
      const getExcursions = await Excursion.find();
      res.json(getExcursions);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addExcursion: async (req, res) => {
    try {
      const { name, descr, price, rating, moreDescr } = req.body;
      const newExcursion = await Excursion.create({
        name: name,
        descr: descr,
        price: price,
        image: req.file.path,
        rating: rating,
        moreDescr: moreDescr
      });
      res.json(newExcursion)

    } catch (error) {
        res.json({ error: error.message });
    }
  },
  getOneExcursion: async (req, res)=>{
    try {
        const getOneExcursion = Excursion.findById(req.params.id)
        res.json(getOneExcursion)
    } catch (error) {
        res.json({ error: error.message });
    }
  }
};
