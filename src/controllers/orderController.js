const db = require('../models')
const Order = db.order

const makeOrder = async(req, res) => {
    const { user_id, address, amount, date, status, ship_date } = req.body
    try {

        const order = await Order.create({
            user_id: user_id,
            address: address,
            amount: amount,
            date: date,
            status: status,
            ship_date: ship_date
        })
        res.send("you have make a order")
    } catch (error) {
        res.send(error)
    }
}


const allOrder = async(req, res) => {
    try {
        const findOrder = await Order.findAll()
        res.send(findOrder)

    } catch (error) {
        res.send(error)
    }
}

const singleOrder = async(req, res) => {
    try {
        const findOrder = await Order.findOne({
            where: {
                id: req.params.id
            }
        })
        res.send(findOrder)

    } catch (error) {
        res.send(error)
    }
}

const updateOrder = async(req, res) => {
    const { user_id, address, amount, date, status, ship_date } = req.body

    try {
        const delOrder = await Order.update({
            user_id: user_id,
            address: address,
            amount: amount,
            date: date,
            status: status,
            ship_date: ship_date
        }, {

            where: {
                id: req.params.id
            }
        })
        res.send(findOrder)

    } catch (error) {
        res.send(error)
    }
}

const delOrder = async(req, res) => {
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
    makeOrder,
    singleOrder,
    delOrder,
    updateOrder,
    allOrder
}