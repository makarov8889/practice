const uuid = require("uuid");
const path = require("path");
const ApiError = require("../errors/ApiError");
const {Restaurant} = require("../models/models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class RestaurantController {

    async create(req, res, next) {
        try {
            const {name, description, menu, address, workBegining, workFinishid} = req.body;

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


    async getOne(req, res) {
        const id = req.params.id;

        const restaurant = await Restaurant.findOne({where: {id}});

        res.json(restaurant);
    }
    
}

module.exports = new RestaurantController();