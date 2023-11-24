const Guide = require("../models/Guide.model");

module.exports.guideController = {
  getGuide: async (req, res) => {
    try {
      const getGuide = await Guide.find();
      res.json(getGuide);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addGuide: async (req, res) => {
    try {
      const { name, description, job } = req.body;
      const newGuide = await Guide.create({
        name,
        image: req.file.path,
        description,
        job
      });
      res.json(newGuide);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
