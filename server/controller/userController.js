const uuid = require("uuid");
const path = require("path");
// const db = require("../db");
const ApiError = require("../errors/ApiError");
const {User} = require("../models/models");
// const { default: ApiError } = require("../errors/ApiError");

class UserController {

    async testUser(req, res) {
        // console.log("Тестовое подключение успешно");
        res.json({text: "Вы смогли подключиться к бд"});
    }

    async check(req, res, next) {
        const {id} = req.query;
        if(!id) {
            return next(ApiError.badRequest("Не задан id"));
        }

        res.json(id);
    }

    async createUser(req, res, next) {
        try {
            const {name, surname,  mail, password} = req.body;

            if(!req.files || !req.files.img) {
                const newUser = await User.create({name, surname, mail, password});

                return res.json(newUser);
            }

            const {img} = req.files;
            let fileName = uuid.v4 + ".jpg";
            img.mv(path.resolve(__dirname, "..", "static", fileName));

            console.log(mail, password);

            const newUser = await User.create({name, surname, mail, password, img: fileName});

            return res.json(newUser);
        }
        catch (e) {
            console.log(e);
            next(ApiError.badRequest(e.message));
        }
    }

    async getUsers(req, res) {
        // const users = await db.query("SELECT * FROM user");
        const users = await User.findAll();
        
        return res.json(users);
    }

    async getOneUser(req, res) {
        const id = req.params.id;
        const users = await db.query("SELECT * FROM user WHERE id = $1", [id]);

        res.json(users.rows[0]);
    }

    async updateUser(req, res) {
        const {id, name, surname, mail, password} = req.body;
        const users = await db.query("UPDATE user set name = $1, surname = $2 mail = $3, password = $4 where id = $5 RETURNING *", [name, surname, mail, password, id]);

        res.json(users.rows[0]);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const users = await db.query("DELETE FROM user WHERE id = $1", [id]);

        res.json(users.rows[0]);
    }

    
}

module.exports = new UserController();