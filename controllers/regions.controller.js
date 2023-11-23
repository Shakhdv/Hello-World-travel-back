const Region = require("../models/Region.model");

module.exports.regionsController = {
  getRegions: async (req, res) => {
    try {
      const getRegions = await Region.find();
      res.json(getRegions);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addRegion: async (req, res) => {
    try {
      const { regionName } = req.body;
      const newRegion = await Region.create({
        regionName,
      });
      res.json(newRegion);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  getRegionById: async (req, res) => {
    try {
      const getOneRegion = Region.findById(req.params.id);
      res.json(getOneRegion);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
