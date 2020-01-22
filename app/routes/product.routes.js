/**
 * Kiedy użytkownik wysyła żądanie o endpoint za pomocą żądań HTTP
 * (GET,  POST, PUT, DELETE), należy zdefiniować jak serwer powinien odpowiedzieć.
 * Robi się to za pomocą routów.
 */

 module.exports = app => {
     const products = require("../controllers/product.controller.js");

     let router = require("express").Router();

     //utworzenie nowego produktu
     router.post("/", products.create);

     //pobranie wszystkich produktów
    router.get("/", products.findAll);

     //pobranie pojedynczego produktu po id
    router.get("/:id", products.findOne);

    //pobranie produktów po kategorii
    router.get("/products/:id", products.findByCategory);

     //zmiana w produkcie o id
    router.put("/:id", products.update);

     //usunięcie produktu
    router.delete("/:id", products.delete);

    //usunięcie wszystkich produktów
    router.delete("/", products.deleteAll);

    //pobranie wszystkich dostępnych produktów
    router.get("/products/available", products.findAllAvailable);

    app.use('/api/products', router);
 }