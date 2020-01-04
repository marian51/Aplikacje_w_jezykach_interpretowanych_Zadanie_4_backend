/**
 * Kontrolery dostępu i modyfikacji danych w bazie
 * 
 * Możliwe, że nie będzie konieczne korzystanie z nich
 * gdyż chyba powinno to robić Sequelize
 */

 const db = require("../models");
 const Product = db.products;
 const Op = db.Sequelize.Op;

 //Tworzenie i zapis nowego produktu
 exports.create = (req, res) => {
    //sprawdzenie poprawności żądania
    if (!req.body.name) {
        res.status(400).send({
            message: "Zawartość nie może być pusta!"
        });
        return;
    }

    //utworzenie produktu
    const product = {
        name = req.body.name,
        description = req.body.description,
        available = req.body.available ? req.body.available : false
    };

    //zapis produktu w bazie
    Product.create(product)
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

 //Wyciągnięcie wszystkich produktów z bazy
 exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { [Op.like]: `%${name}%`}} : null;

    Product.findAll({ where: condition })
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

 //Wyszukanie pojedynczego produktu przez ID
 exports.findOne = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Nieokreślony błąd podczas pobierania produktu o id = "+id
            });
        });
 };

 //Zmiana produktu przez ID
 exports.update = (req, req) => {

 };

 //usunięcie produktu
 exports.delete = (req, res) => {

 };

 //znalezienie wszystkich dostępnych produktów
 exports.findAllAvailable = (req, res) => {

 };