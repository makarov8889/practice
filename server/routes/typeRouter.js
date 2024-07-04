const Router = require("express");
const router = new Router();
const checkRole = require("../middleware/checkRoleMiddleware");

const typeController = require("../controller/typeController");

router.post("/", checkRole("Administration"), typeController.create);
// router.get("/", typeController.getUsers);

module.exports = router