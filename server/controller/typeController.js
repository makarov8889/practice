const uuid = require("uuid");
const path = require("path");
const ApiError = require("../errors/ApiError");
const {User} = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class typeController {
    async create(req, res, next) {
        const {name} = req.body;
        console.log("Вы создали тип -", name);
        return res.json(name);
    }
}

module.exports = new typeController();