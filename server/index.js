require("dotenv").config(); 

const express = require("express");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes/index");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors')
const fileUpload = require("express-fileupload")

app.use(cors())
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));

app.use("/api", router);


app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {console.log(`server - http://localhost:${PORT}`);});
    }
    catch (e) {
        console.log(e);
    }
}

start();