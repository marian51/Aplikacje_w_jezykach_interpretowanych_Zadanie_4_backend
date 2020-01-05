/**
 * Kiedy użytkownik wysyła żądanie o endpoint za pomocą żądań HTTP
 * (GET,  POST, PUT, DELETE), należy zdefiniować jak serwer powinien odpowiedzieć.
 * Robi się to za pomocą routów.
 */

module.exports = app => {
    const categories = require("../controllers/category.controller.js");

    let router = require("express").Router();

    router.post("/", categories.create);
    router.get("/", categories.findAll);

   app.use('/api/categories', router);
}