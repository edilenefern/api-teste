const express = require("express");
const cors = require("cors");

const PORT =    process.env.PORT || 7000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req, res) =>{
    res.send({ app: "Hello World!" });
});

app.listen(PORT);