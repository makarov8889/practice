const ApiError = require("../errors/ApiError");
const {Reviews} = require("../models/models")

class ReviewsController {

    async create(req, res, next) {
        try {
            const {description} = req.body;

            if(!description) {
                return next(ApiError.badRequest("Не все поля заполнены"))
            }

            const newItem = await Reviews.create({description}); 

            return res.json(newItem);
        }
        catch (e) {
            console.log(e);
            next(ApiError.badRequest(e.message));
        }
    }


    async getAll(req, res) {
        const allItems = await Reviews.findAll();
        
        return res.json(allItems);
    }


    async getOne(req, res) {
        const id = req.params.id;

        const oneItems = await Reviews.findOne({where: {id}});

        res.json(oneItems);
    }

}

module.exports = new ReviewsController();