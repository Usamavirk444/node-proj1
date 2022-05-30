module.exports = (sequelize, DataTypes) => {
    const Product_IMG = sequelize.define('product_images', {

        pro_id: {
            type: DataTypes.INTEGER
        },
        defaul_image: {
            type: DataTypes.BOOLEAN
        }
    })
    return Product_IMG;
}