const { toursController } = require("../controllers/tours.controller");
const { Router } = require("express");
const imgMiddleware = require("../models/middlewares/img.middleware");
const router = Router();

router.get("/tours", toursController.getTours);
router.get("/tours/:id", toursController.getTourById);
router.post("/tours", imgMiddleware.single("image"), toursController.addTour);

module.exports = router;
