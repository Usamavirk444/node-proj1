const { cartItem } = require('../models')
const db = require('../models')
const CartItem = db.cartItem
const Cart = db.cart

// inserting data in cart and cart item table 
const makeCartItem = async(req, res) => {
    console.log(res.locals.id)
    const { pro_id, qty, price } = req.body
    const cart = await Cart.findOne({
        where: {
            user_id: res.locals.id
        }
    })
    if (cart == null) {
        const createCart = await Cart.create({
            user_id: res.locals.id
        })
        const createItem = await cartItem.create({
            cart_id: createCart.id,
            pro_id: pro_id,
            qty: qty,
            price: price
        })
        res.send({ createCart, createItem })
    } else if (cart.id = res.locals.id) {
        const createItem = await cartItem.create({
            cart_id: cart.id,
            pro_id: pro_id,
            qty: qty,
            price: price
        })
        res.send(createItem)
    }

}

// finding data of specific user
const allCartItem = async(req, res) => {
    console.log(res.locals.id)

    try {
        const cartUser = await CartItem.findAll({
            where: {
                user_id: 12
            }


        })
        console.log(cartUser)
        res.send(cartUser)
            // res.render('pages/cart', { cartUser })
            // res.redirect('/cart/cart-view', { cartUser })

    } catch (error) {
        res.send(error)
    }
}



const delCartItem = async(req, res) => {
    try {
        const delCartItem = await CartItem.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(delCartItem)

    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    makeCartItem,
    delCartItem,
    allCartItem
}