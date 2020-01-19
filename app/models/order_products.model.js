module.exports = (sequelize, Sequelize) => {
    const Order_products = sequelize.define("orderProducts", {
        orderId: {
            type: Sequelize.INTEGER
        },
        productId: {
            type: Sequelize.INTEGER
        },
        productQuantity: {
            type: Sequelize.INTEGER
        }
    });

    return Order_products;
}