const { review } = require('../models');
const db = require('../models');
const ProductReview = db.review

const createProductReview = async(req, res) => {
    const { pro_id, review, user_id } = req.body
    try {

        const makeDetail = await ProductReview.create({

            pro_id: pro_id,
            review: review,
            user_id: user_id
        })
        res.send(makeDetail)
    } catch (error) {
        res.send(error)
    }
}
const singleReview = async(req, res) => {
    try {
        const findSingle = await ProductReview.findOne({
            where: { id: req.params.id }
        })
        res.send(findSingle)

    } catch (error) {
        res.send(error)
    }
}

const allReview = async(req, res) => {
    try {
        const findDetail = await ProductReview.findAll()
        res.send(findDetail)
    } catch (error) {
        res.send(error)
    }
}
const updateReview = async(req, res) => {
    const { pro_id, review, user_id } = req.body


    try {

        const makeDetail = await ProductReview.update({
            pro_id: pro_id,
            review: review,
            user_id: user_id
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

const delReview = async(req, res) => {
    try {

        const singleDel = await ProductReview.destroy({
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
    createProductReview,
    allReview,
    delReview,
    updateReview,
    singleReview

}