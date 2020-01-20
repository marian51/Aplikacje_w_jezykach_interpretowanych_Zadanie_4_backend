const db = require("../models");
const State = db.states;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.stateName) {
        res.status(400).send({
            message: "Brak nazwy statusu"
        });
        return;
    }

    const state = {
        stateName: req.body.stateName
    }

    State.create(state)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Błąd statusu"
            });
        });
}

exports.findAll = (req, res) => {
    const name = req.query.stateName;
    var condition = name ? { name: { [Op.like]: `%${name}%`}} : null;

    State.findAll({ where: condition })
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

exports.findOne = (req, res) => {
    const id = req.params.id;

    State.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err + "Nieokreślony błąd podczas pobierania produktu o id = "+id
            });
        });
 };