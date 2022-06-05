module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('cart_items', {
        cart_id: {
            type: DataTypes.INTEGER
        },
        pro_id: {
            type: DataTypes.INTEGER
        },
        qty: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER
        },
    })
    return Cart;
}