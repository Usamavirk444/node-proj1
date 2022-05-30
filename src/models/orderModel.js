module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('orders', {
        user_id: {
            type: DataTypes.INTEGER
        },
        address: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.INTEGER
        },
        amount: {
            type: DataTypes.DECIMAL
        },
        date: {
            type: DataTypes.DATE

        },
        status: {
            type: DataTypes.INTEGER
        },
        ship_date: {
            type: DataTypes.DATE
        }
    })
    return Order;
}