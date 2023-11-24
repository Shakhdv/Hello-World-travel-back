const { guideController } = require("../controllers/guide.controller");
const { Router } = require("express");
const imgMiddleware = require("../models/middlewares/img.middleware");
const router = Router();

router.get("/guide", guideController.getGuide);
router.post("/guide", imgMiddleware.single("image"), guideController.addGuide);

module.exports = router;
