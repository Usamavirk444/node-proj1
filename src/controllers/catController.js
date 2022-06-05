const db = require('../models')
const Cart = db.cart
const CartItem = db.cartItem
const Product = db.product;
const ProductImg = db.img

// view cart page on web
const cart = async(req, res) => {
    console.log(res.locals.id)
    res.render('pages/cart')
}

// find all item of cart of specific user
const allCart = async(req, res) => {
    console.log(res.locals.id)

    try {
        const cartUser = await Cart.findOne({
            where: {
                user_id: res.locals.id
            },
            include: [{
                model: CartItem,
                include: [{
                    model: Product,
                    include: [
                        ProductImg
                    ]
                }]
            }]

        })
        console.log(cartUser)
            // res.send(cartUser)
        res.render('pages/cart', { cartUser })
    } catch (error) {
        res.send(error)
    }
}


const delCart = async(req, res) => {
    try {
        const delOrder = await Order.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(findOrder)

    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    cart,
    delCart,
    allCart
}