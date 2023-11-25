const { usersController } = require("../controllers/user.controller");
const { Router } = require("express");
const authMiddleware = require("../models/middlewares/auth.middleware");
const avatarMiddleware = require("../models/middlewares/img.middleware");
const router = Router();
//

router.get("/users", usersController.getAllUsers);
router.get("/user", authMiddleware, usersController.getOneUser);
router.post(
  "/sign",
  avatarMiddleware.single("image"),
  usersController.addUsers
);
router.post("/login", usersController.login);
router.patch("/user", authMiddleware, usersController.addTours);


module.exports = router;
