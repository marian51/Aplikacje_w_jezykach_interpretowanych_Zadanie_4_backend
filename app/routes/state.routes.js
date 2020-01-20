module.exports = app => {
    const states = require("../controllers/state.controller.js");

    let router = require("express").Router();

    router.post("/", states.create);
    router.get("/", states.findAll);
    router.get("/:id", states.findOne);

   app.use('/api/states', router);
}