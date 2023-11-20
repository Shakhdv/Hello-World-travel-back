const { commentController } = require("../controllers/comments.controller");
const { Router } = require("express");
const authMiddleware = require("../models/middlewares/auth.middleware");
const router = Router();

router.get("/comment", commentController.getComments);
router.post("/comment", authMiddleware, commentController.addComments);
router.delete("/comment/:id", commentController.deleteComments);

module.exports = router;
