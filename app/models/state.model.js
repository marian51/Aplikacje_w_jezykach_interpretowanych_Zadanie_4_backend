module.exports = (sequelize, Sequelize) => {
    const State = sequelize.define("state", {
        stateName: {
            type: Sequelize.STRING
        }
    });

    return State;
}