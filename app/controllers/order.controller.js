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
        totalPrice: req.body.totalPrice
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