const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  mail: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING }
});

const Restaurant = sequelize.define("restaurant", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  menu: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  workBegining: { type: DataTypes.DATE },
  workFinishid: { type: DataTypes.DATE },
  imgOne: { type: DataTypes.STRING },
  imgSecond: { type: DataTypes.STRING },
  imgThird: { type: DataTypes.STRING }
});

const Reviews = sequelize.define("reviews", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING }
});

const Reservation = sequelize.define("reservation", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.DATE },
  time: { type: DataTypes.TIME },
  quantity: { type: DataTypes.INTEGER },
  description: { type: DataTypes.STRING }
});

const RestaurantReview = sequelize.define("restaurant_review", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

Restaurant.belongsToMany(Reviews, { through: RestaurantReview });
Reviews.belongsToMany(Restaurant, { through: RestaurantReview });

Reservation.hasOne(User);
User.belongsTo(Reservation);

module.exports = {
  User,
  Restaurant,
  Reviews,
  Reservation
};
