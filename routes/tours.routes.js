const { toursController } = require("../controllers/tours.controller");
const { Router } = require("express");
const router = Router();

router.get("/tours", toursController.getTours);
router.get("/tours", toursController.getTourById);
router.post("/tours", toursController.addTour);

module.exports = router;
