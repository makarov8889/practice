const jwt = require("jsonwebtoken");

module.exports = function(role) {
    return function(req, res, next) {
        if (req.method === "OPTIONS") {
            return next();
        }
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(400).json({message: "Ошибка передачи ключей"});
            }
    
            const token = authHeader.split(" ")[1];
            if (!token) {
                return res.status(401).json({message: "Пользователь не авторизован"});
            }
    
            const decoded = jwt.verify(token, "key_secret_555");
            if(decoded.role !== role) {
                return res.status(403).json({message: "Нет доступа"});
            }
            req.user = decoded;
            next();
            
        } catch (e) {
            console.log(e);
            res.status(401).json({message: "Пользователь не авторизован"});
        }
    }
}