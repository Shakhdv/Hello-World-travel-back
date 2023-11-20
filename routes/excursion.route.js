const { excursionController } = require("../controllers/excursion.controller");
const { Router } = require("express");
const imgMiddleware = require("../models/middlewares/img.middleware");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.get("/excursion", excursionController.getExcursions);
router.get("/excursion/:id", excursionController.getOneExcursion);
router.post("/excursion", imgMiddleware.single("image"), excursionController.addExcursion);

module.exports = router;
