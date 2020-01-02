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
 };

 //Wyciągnięcie wszystkich produktów z bazy
 exports.findAll = (req, res) => {

 };

 //Wyszukanie pojedynczego produktu przez ID
 exports.findOne = (req, res) => {

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