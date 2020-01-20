module.exports = app => {
    const orders = require("../controllers/order.controller.js")

    let router = require("express").Router();

    //utworzenie zamówienia w bazie
    router.post("/", orders.create);

    app.use('/api/orders', router);
}