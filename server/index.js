const express = require("express");
const personRouter = require("./routes/person.routes");
// const postRouter = require("./routes/post.routes");

const PORT = 5000;
const app = express();
const cors = require('cors')

app.listen(PORT, () => {console.log(`server - http://localhost:${PORT}`);});

app.use(cors())
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hello");
// })

app.use("/api", personRouter);
// app.use("/api", postRouter);