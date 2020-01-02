/**
 * Reprezentacja tabeli Produktów w bazie MySQL
 */

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("produkt", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        available: {
            type: Sequelize.BOOLEAN
        }
    });

    return Product;
}