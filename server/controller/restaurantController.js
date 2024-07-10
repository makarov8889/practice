const uuid = require("uuid");
const path = require("path");
const ApiError = require("../errors/ApiError");
const {User, Restaurant} = require("../models/models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJwt = (id, mail, role) => {
    return jwt.sign({id, mail, role}, "key_secret_555", {expiresIn: "24h"});
}

const generateJWTFromInfi = (id, name, surname, mail, role, img) => {
    return jwt.sign({id, name, surname, mail, role, img}, "key_secret_555", {expiresIn: "24h"});
}

class RestaurantController {

    async create(req, res, next) {
        try {
            const {name, description,  menu, address, workBegining, workFinishid} = req.body;

            if(!name || !description || !menu || !address) {
                return next(ApiError.badRequest("Не все основные поля заполнены"))
            }

            if(!req.files || !req.files.imgOne || !req.files.imgSecond || !req.files.imgThird) {
                const newRestourane = await Restaurant.create({name, description,  menu, address});

                return res.json(newRestourane);
            }

            const {imgOne, imgSecond, imgThird} = req.files;
            const images = [imgOne, imgSecond, imgThird];

            let fileName = [];
            for (let i = 0; i < 3; i++) {
                fileName[i] = uuid.v4 + ".jpg";
                images[i].mv(path.resolve(__dirname, "..", "static", fileName[i]));
            }

            let newRestourane

            if(!workBegining || !workFinishid) {
                 newRestourane = await Restaurant.create({name, description,  menu, address, imgOne: fileName[0], imgSecond: fileName[1], imgThird: fileName[2]});
            }
            else{
                newRestourane = await Restaurant.create({name, description,  menu, address, workBegining, workFinishid, imgOne: fileName[0], imgSecond: fileName[1], imgThird: fileName[2]});
            }

            return res.json(newRestourane);
        }
        catch (e) {
            console.log(e);
            next(ApiError.badRequest(e.message));
        }
    }


    async getAll(req, res) {
        const restaurant = await Restaurant.findAll();
        
        return res.json(restaurant);
    }


    async getOneRestaurant(req, res) {
        const id = req.params.id;

        const restaurant = await Restaurant.findOne({where: {id}});

        res.json(restaurant);
    }


    async updateUser(req, res) {
        const {id, name, surname, mail, password} = req.body;
        // const users = await db.query("UPDATE user set name = $1, surname = $2 mail = $3, password = $4 where id = $5 RETURNING *", [name, surname, mail, password, id]);

        res.json(users.rows[0]);
    }


    async delete(req, res) {
        const id = req.params.id;
        const users = await User.delete({id});

        res.json(users.rows[0]);
    }

    
}

module.exports = new RestaurantController();