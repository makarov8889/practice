const uuid = require("uuid");
const path = require("path");
const ApiError = require("../errors/ApiError");
const {User} = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJwt = (id, mail, role) => {
    return jwt.sign({id, mail, role}, "key_secret_555", {expiresIn: "24h"});
}

const generateJWTFromInfi = (id, name, surname, mail, role, img) => {
    return jwt.sign({id, name, surname, mail, role, img}, "key_secret_555", {expiresIn: "24h"});
}

userRoles = {
    "user": "Person",
    "seller": "Seller",
    "admin": "Administration"
}

class UserController {

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

        res.json(users.rows[0]);
    }


    async updateUser(req, res) {
        const {id, name, surname, mail, password} = req.body;

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

        let newRole = role;

        if(!newRole) {
            newRole = userRoles["user"];
        }

        const hashPassword = await bcrypt.hash(password, 2);
        const user = await User.create({name, surname, mail, password: hashPassword, role: newRole});
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
        const token = generateJwt(req.user.id, req.user.mail, req.user.role);

        res.json({token});
    }

    async userInfo(req, res, next) {
        try {
            const {id} = req.body;
            const user = await User.findOne({where: {id}});
            if (!user) {
                return next(ApiError.internal("Такого пользователя не существует"));
            }

            const token = generateJWTFromInfi(user.id, user.name, user.surname, user.mail, user.role, user.img);

            return res.json({token});
        } catch (e) {
            return next(ApiError.internal("Ошибка при получении данных пользователя"));
        }
    }

    // async setImg(req, res, next) {
    //     try {
    //         const { id } = req.body;
    //         const user = await User.findOne({ where: { id } });
    //         if (!user) {
    //             return next(ApiError.internal("Такого пользователя не существует"));
    //         }
    
    //         if (!req.files || !req.files.img) {
    //             return next(ApiError.badRequest("Изображение не загружено"));
    //         }
    
    //         const { img } = req.files;
    //         const fileName = uuid.v4() + ".jpg";
    //         const filePath = path.resolve(__dirname, "..", "static", fileName);
    
    //         img.mv(filePath, async (err) => {
    //             if (err) {
    //                 return next(ApiError.internal("Ошибка при загрузке файла"));
    //             }
    
    //             if (user.img) {
    //                 const oldFilePath = path.resolve(__dirname, "..", "static", user.img);
    //                 fs.unlink(oldFilePath, (err) => {
    //                     if (err) {
    //                         console.log("Не удалось удалить старое изображение:", err);
    //                     }
    //                 });
    //             }
    
    //             await User.update({ img: fileName }, { where: { id } });
    
    //             const updatedUser = await User.findOne({ where: { id } });
    //             const token = generateJWTFromInfi(
    //                 updatedUser.id,
    //                 updatedUser.name,
    //                 updatedUser.surname,
    //                 updatedUser.mail,
    //                 updatedUser.role,
    //                 updatedUser.img
    //             );
    
    //             console.log(updatedUser.id, updatedUser.name, updatedUser.surname, updatedUser.img, updatedUser.mail, updatedUser.role);
    
    //             return res.json({ token });
    //         });
    //     } catch (e) {
    //         return next(ApiError.internal("Ошибка при обновлении данных пользователя"));
    //     }
    // }

    
}

module.exports = new UserController();