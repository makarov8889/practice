const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware");

const restaurantController = require("../controller/restaurantController");

router.post("/", restaurantController.create);
router.get("/", restaurantController.getAll);
router.get("/:id", restaurantController.getOne);

module.exports = router