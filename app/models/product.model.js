/**
 * Reprezentacja tabeli Produktów w bazie MySQL
 */

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        },
        weight: {
            type: Sequelize.DOUBLE
        },
        categoryId: {
            type: Sequelize.INTEGER
        },
        available: {
            type: Sequelize.BOOLEAN
        }
    });

    //Próba utworzenia relacji Many-to-Many

    return Product;
}