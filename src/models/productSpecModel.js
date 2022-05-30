module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define('order_detail', {
        memory: {
            type: DataTypes.STRING,
        },
        ram: {
            type: DataTypes.STRING,
        },
        pro_id: {
            type: DataTypes.INTEGER,
        },
        color: {
            type: DataTypes.STRING,
        },
        screen_size: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DECIMAL,

        }
    })
    return OrderDetail;
}