const uuid = require("uuid");
const path = require("path");
const ApiError = require("../errors/ApiError");
const {User} = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJwt = (id, mail, role) => {
    return jwt.sign({id, mail, role}, "key_secret_555", {expiresIn: "24h"})
}

userRoles = {
    "user": "Person",
    "seller": "Seller",
    "admin": "Administration"
}

class UserController {

    async testUser(req, res) {
        res.json({text: "Вы смогли подключиться к бд"});
    }


    async createUser(req, res, next) {
        try {
            const {name, surname,  mail, password} = req.body;

            if(!name || !surname || !mail || !password) {
                return next(ApiError.badRequest("Не все основные поля заполнены"))
            }

            if(!req.files || !req.files.img) {
                const newUser = await User.create({name, surname, mail, password, role: userRoles["user"]});

                return res.json(newUser);
            }

            const {img} = req.files;
            let fileName = uuid.v4 + ".jpg";
            img.mv(path.resolve(__dirname, "..", "static", fileName));

            console.log(mail, password);

            const newUser = await User.create({name, surname, mail, password, role: userRoles["user"], img: fileName});

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
        // const users = await db.query("SELECT * FROM user WHERE id = $1", [id]);

        res.json(users.rows[0]);
    }


    async updateUser(req, res) {
        const {id, name, surname, mail, password} = req.body;
        // const users = await db.query("UPDATE user set name = $1, surname = $2 mail = $3, password = $4 where id = $5 RETURNING *", [name, surname, mail, password, id]);

        res.json(users.rows[0]);
    }


    async deleteUser(req, res) {
        const id = req.params.id;
        const users = await User.delete({id});

        res.json(users.rows[0]);
    }


    async registration(req, res, next) {
        const {name, surname, mail, password, role} = req.body;

        if(!mail || !password) {
            return next(ApiError.badRequest("Некоректный mail или пароль"));
        }

        const candidate = await User.findOne({where: {mail}});
        if(candidate) {
            return next(ApiError.badRequest("Пользователь с таким mail или password уже существует"));
        }

        if(!role) {
            role = userRoles["user"];
        }

        const hashPassword = await bcrypt.hash(password, 2);
        const user = await User.create({name, surname, mail, role, password: hashPassword});
        // const token = jwt.sign({id: user.id, name, surname, mail, role}, "key_secret_555", {expiresIn: "24h"});
        const token = generateJwt(user.id, user.mail, user.role);

        return res.json({token});
    }


    async login(req, res, next) {
        const {mail, password} = req.body;

        const user = await User.findOne({where: {mail}});
        if(!user) {
            return next(ApiError.iternal("Такого пользователя не существует"));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword) {
            return next(ApiError.iternal("Такого пользователя не существует"))
        }

        const token = generateJwt(user.id, user.mail, user.role);

        return res.json({token});
    }


    async check(req, res, next) {
        // const {id} = req.query;
        // if(!id) {
        //     return next(ApiError.badRequest("Не задан id"));
        // }

        // res.json(id);

        const token = generateJwt(req.user.id, req.user.mail, req.user.role);

        res.json({token});
    }

    
}

module.exports = new UserController();