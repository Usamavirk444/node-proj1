module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define('order_detail', {


        ord_id: {
            type: DataTypes.INTEGER,

        },
        pro_id: {
            type: DataTypes.INTEGER,


        },
        quantity: {
            type: DataTypes.INTEGER,

        },
        price: {
            type: DataTypes.DECIMAL,

        }
    })
    return OrderDetail;
}