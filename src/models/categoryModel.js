module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('categories', {
        name: {
            type: DataTypes.STRING
        },
        img: {
            type: DataTypes.STRING
        }
    })
    return Category;
}