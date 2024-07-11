const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware");

const reservationController = require("../controller/restaurantController");

router.post("/", reservationController.create);
router.get("/", reservationController.getAll);
router.get("/:id", reservationController.getOne);

module.exports = router