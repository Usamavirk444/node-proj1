module.exports = (sequelize, DataTypes) => {
    const ProductReview = sequelize.define('product_reviews', {

        pro_id: {
            type: DataTypes.INTEGER
        },
        reviews: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.BOOLEAN
        }
    })
    return ProductReview;
}