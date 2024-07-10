const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const restaurantRouter = require("./restaurantRouter");
const typeRouter = require("./typeRouter");

router.use("/user", userRouter);
router.use("/restaurant", restaurantRouter);
router.use("/type", typeRouter);

module.exports = router;