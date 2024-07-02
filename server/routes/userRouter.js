const Router = require("express");
const router = new Router();

const UserController = require("../controller/userController");

router.post("/auth", UserController.check);
router.post("/", UserController.createUser);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getOneUser);
router.put("/", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router