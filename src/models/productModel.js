module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('products', {
        name: {
            type: DataTypes.STRING
        },
        cat_id: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        featured: {
            type: DataTypes.BOOLEAN

        },
        desc: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        }
    })
    return Product;
}