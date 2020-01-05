/**
 * Reprezentacja tabeli Kategorii w bazie MySQL
 */

module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Category;
}