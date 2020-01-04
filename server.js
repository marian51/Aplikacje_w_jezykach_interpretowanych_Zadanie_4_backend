//podstawa dla metod rest
const express = require("express");

//parsuje żądania i tworzy obiekty req.object
const bodyParser = require("body-parser");

//umożliwia korzystanie z usług cors
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

//synchornizacja, zrzucanie i tworzenie bazy na nowo
const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Reset bazy");
});

//podstawowy rout
app.get("/", (req, res) => {
    res.json({ message: "Witaj w sklepie." });
});

//routy
require("./app/routes/product.routes")(app);

//ustawienie portu od nasłuchu
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server dziala na porcie ${PORT}.`);
});