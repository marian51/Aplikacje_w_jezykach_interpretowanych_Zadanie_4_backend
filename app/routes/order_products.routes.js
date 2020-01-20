module.exports = app => {
    const ordersproducts = require("../controllers/order_products.controller.js")

    let router = require("express").Router();

    //utworzenie zamówienia w bazie
    router.post("/", ordersproducts.create);

    router.get("/", ordersproducts.findAll);

    app.use('/api/orderproducts', router);
}