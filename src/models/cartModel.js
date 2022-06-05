module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('carts', {
        user_id: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.STRING
        }
    })
    return Cart;
}