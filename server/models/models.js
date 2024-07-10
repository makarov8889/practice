const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    mail: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
});

const Restaurant = sequelize.define("restaurant", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    menu: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    workBegining: {type: DataTypes.DATE},
    workFinishid: {type: DataTypes.DATE},
    imgOne: {type: DataTypes.STRING},
    imgSecond: {type: DataTypes.STRING},
    imgThird: {type: DataTypes.STRING},
});

module.exports = {
    User, Restaurant
}