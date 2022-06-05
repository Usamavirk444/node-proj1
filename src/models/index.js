const { Sequelize, DataTypes } = require('sequelize'); // require Sequelize
const config = require('../config/config')
    // console.log(config.DB.NAME + " " + config.DB.USERNAME)

const sequelize = new Sequelize('node_proj1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    define: {
        timestamps: false,
        freezTableName: true
    }
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// user verify by jwt 
db.user = require('./authModel')(sequelize, DataTypes)

// all about product model
db.product = require('./productModel')(sequelize, DataTypes)
db.img = require('./productImageModel')(sequelize, DataTypes)
db.review = require('./productReviewModel')(sequelize, DataTypes)
db.specs = require('./productSpecModel')(sequelize, DataTypes)

// category 
db.category = require('./categoryModel')(sequelize, DataTypes)

//order
db.order = require('./orderModel')(sequelize, DataTypes)
db.orderDetail = require('./orderDetailModel')(sequelize, DataTypes)

// CART

db.cart = require('./cartModel')(sequelize, DataTypes)
db.cartItem = require('./cartItemModel')(sequelize, DataTypes)

// ==============--------ASSOCIATION---------======================

//cate association with product
db.category.hasMany(db.product, { foreignKey: 'cat_id' });
db.product.belongsTo(db.category, { foreignKey: 'cat_id' });

//product association with imgaes
db.product.hasOne(db.img, { foreignKey: 'pro_id' });
db.img.belongsTo(db.product, { foreignKey: 'pro_id' });

//product association with review
db.product.hasMany(db.review, { foreignKey: 'pro_id' });
db.review.belongsTo(db.product, { foreignKey: 'pro_id' });



//user association with order
db.user.hasMany(db.order, { foreignKey: 'user_id' });
db.order.belongsTo(db.user, { foreignKey: 'user_id' });

//user association with order
db.order.hasMany(db.orderDetail, { foreignKey: 'pro_id' });
db.orderDetail.belongsTo(db.order, { foreignKey: 'pro_id' });

//cart
db.cart.hasMany(db.cartItem, { foreignKey: 'cart_id' })
db.cartItem.belongsTo(db.cart, { foreignKey: 'cart_id' })

//cart
db.product.hasMany(db.cartItem, { foreignKey: 'pro_id' })
db.cartItem.belongsTo(db.product, { foreignKey: 'pro_id' })




module.exports = db;