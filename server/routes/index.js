const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const restaurantRouter = require("./restaurantRouter");
const reviewsRouter = require("./reviewsRouter");
const reservationRouter = require("./reservationRouter");

router.use("/user", userRouter);
router.use("/restaurant", restaurantRouter);
router.use("/reviews", reviewsRouter);
// router.use("/reservation", reservationRouter);


module.exports = router;