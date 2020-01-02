//konfiguracja bazy danych
module.exports = {
    //parametry komunikacji z bazą MySQL
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "sklep-db",
    dialect: "mysql",

    //opcjonalna, używane przez Sequelize
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};