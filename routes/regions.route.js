const { regionsController } = require("../controllers/regions.controller");
const { Router } = require("express");
const router = Router();

router.get("/region", regionsController.getRegions);
router.get("/region/:id", regionsController.getRegionById);
router.post("/region", regionsController.addRegion);

module.exports = router;