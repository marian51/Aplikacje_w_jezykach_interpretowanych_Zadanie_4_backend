module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        stateId: {
            type: Sequelize.INTEGER
        },
        userName: {
            type: Sequelize.STRING
        },
        userEmail: {
            type: Sequelize.STRING
        },
        userPhone: {
            type: Sequelize.STRING
        }
    });

    return Order;
}