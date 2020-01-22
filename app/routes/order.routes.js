module.exports = app => {
    const orders = require("../controllers/order.controller.js")

    let router = require("express").Router();

    //utworzenie zamówienia w bazie
    router.post("/", orders.create);

    router.get("/", orders.findAll);

    router.put("/:id", orders.update);

    app.use('/api/orders', router);
}