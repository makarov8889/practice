const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware");

const userController = require("../controller/userController");

router.post("/", userController.createUser);
router.get("/", userController.getUsers);
// router.get("/:id", userController.getOneUser);
// router.put("/", userController.updateUser);
router.delete("/del/:id", userController.deleteUser);

router.post("/reg", userController.registration);
router.post("/log", userController.login);
router.get("/auth", authMiddleware, userController.check);

module.exports = router