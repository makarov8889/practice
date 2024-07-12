const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware");

const reviewsController = require("../controller/restaurantController");

router.post("/", reviewsController.create);
router.get("/", reviewsController.getAll);
router.get("/:id", reviewsController.getOne);

module.exports = router