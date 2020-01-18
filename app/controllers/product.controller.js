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
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        weight: req.body.weight,
        categoryId: req.body.categoryId,
        available: req.body.available ? req.body.available : false
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
    var condition = name ? { name: { [Op.like]: `%${name}%`}} : null;

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
exports.update = (req, res) => {
    const id = req.params.id;

    Product.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Produkt zmieniony poprawnie."
            });
        } else {
            res.send({
                message: `Nie można wprowadzić zmiany w produkcie o id = ${id}. Być może produkt nie został znaleziony, bądź został wprowadzony błędnie.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Błąd podczas zmiany w produkcie o id = "+id
        });
    });
};
 

 //usunięcie produktu
 exports.delete = (req, res) => {
    const id = req.params.id;

    Product.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Produkt został usunięty pomyślnie."
            });
         } else {
             res.send ({
                 message: `Nie można usunąć produktu o id =${id}. Być może produkt nie został znaleziony.`
             });
         }
    })
    .catch(err => {
        res.status(500).send({
            message: "Nie można usunąć produktu o id = "+id
        });
    });
 };

 //usunięcie wszystkich produktów
 exports.deleteAll = (req, res) => {
     Product.destroy({
         where: {},
         truncate: false
     })
     .then(nums => {
         res.send({ message: `Produkty ${nums} zostały usunięte poprawnie.`})
     })
     .catch(err => {
         res.status(500).send({
             message:
                err.message || "Nieokreślony błąd podczas usuwania wszysktich przedmiotów."
         });
     });
 };

 //znalezienie wszystkich dostępnych produktów
 exports.findAllAvailable = (req, res) => {
    Product.findAll({ where: {available: true  } })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Nieokreślony błąd podczas pobierania wszystkich dostępnch produktów."
        });
    });
 };