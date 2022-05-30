const { orderDetail } = require('../models');
const db = require('../models');
const OrderDetail = db.orderDetail

const createOrderDetail = async(req, res) => {
    const { order_id, pro_id, quantity, price } = req.body
    try {

        const makeDetail = await OrderDetail.create({
            order_id: order_id,
            pro_id: pro_id,
            quantity: quantity,
            price: price
        })
        res.send(makeDetail)
    } catch (error) {
        res.send(error)
    }
}
const singleDetail = async(req, res) => {
    try {
        const findSingle = await orderDetail.findOne({
            where: { id: req.params.id }
        })
        res.send(findSingle)

    } catch (error) {
        res.send(error)
    }
}

const allDetail = async(req, res) => {
    try {
        const findDetail = await orderDetail.findAll()
        res.send(findDetail)
    } catch (error) {
        res.send(error)
    }
}
const updateDetail = async(req, res) => {
    const { order_id, pro_id, quantity, price } = req.body
    try {

        const makeDetail = await OrderDetail.update({
            order_id: order_id,
            pro_id: pro_id,
            quantity: quantity,
            price: price
        }, {
            where: {
                id: req.params.id
            }
        })
        res.send(makeDetail)
    } catch (error) {
        res.send(error)
    }

}

const delDetail = async(req, res) => {
    try {

        const singleDel = await OrderDetail.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(singleDel)
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    createOrderDetail,
    singleDetail,
    updateDetail,
    delDetail,
    allDetail

}