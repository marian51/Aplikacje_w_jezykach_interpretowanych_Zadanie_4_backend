const db = require("../models");
const Order = db.orders;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.totalPrice) {
        res.status(400).send({
            message: "Zamówienie nie ma wartości!"
        });
        return;
    }

    const order = {
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userPhone: req.body.userPhone,
        stateId: req.body.stateId,
        totalPrice: req.body.totalPrice,
        acceptDate: null
    };

    Order.create(order)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Błąd"
            })
        });
};

exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%`}} : null;

    Order.findAll({ where: condition })
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

 exports.update = (req, res) => {
    const id = req.params.id;

    Order.update(req.body, {
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