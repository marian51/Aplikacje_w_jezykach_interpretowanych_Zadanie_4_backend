const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parser json
app.use(bodyParser.json());

//parser url
app.use(bodyParser.urlencoded({ extended: true }));

//podstawowy rout
app.get("/", (req, res) => {
    res.json({ message: "Witaj w sklepie." });
});

//ustawienie portu
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server dziala na porcie ${PORT}.`);
});