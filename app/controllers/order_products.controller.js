const db = require("../models");
const OrderProduct = db.orderproducts;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.orderId) {
        res.status(400).send({
            message: "Brak orderId!"
        });
        return;
    }

    const entity = {
        productId: req.body.productId,
        orderId: req.body.orderId,
        productQuantity: req.body.productQuantity
    };

    OrderProduct.create(entity)
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
    const name = req.query.orderId;
    var condition = name ? { name: { [Op.like]: `%${name}%`}} : null;

    OrderProduct.findAll({ where: condition })
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