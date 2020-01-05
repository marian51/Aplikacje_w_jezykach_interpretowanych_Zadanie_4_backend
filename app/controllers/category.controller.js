const db = require("../models");
const Category = db.categories;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%`}} : null;

    Category.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Nieokreślony błąd podczas pobierania produktów."
            });
        });
 };

 exports.create = (req, res) => {
    //sprawdzenie poprawności żądania
    if (!req.body.name) {
        res.status(400).send({
            message: "Zawartość nie może być pusta!"
        });
        return;
    }

    //utworzenie produktu
    const category = {
        name: req.body.name,
        description: req.body.description
    };

    //zapis produktu w bazie
    Category.create(category)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "Nieokreślony błąd podczas tworzenia produktu"
            });
        });
 };