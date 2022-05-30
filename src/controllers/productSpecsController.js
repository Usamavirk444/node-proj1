const { review } = require('../models');
const db = require('../models');
const ProductSpecs = db.specs

const createProductSpecs = async(req, res) => {
    const { pro_id, review, user_id } = req.body
    try {

        const makeDetail = await ProductSpecs.create({

            pro_id: pro_id,
            review: review,
            user_id: user_id
        })
        res.send(makeDetail)
    } catch (error) {
        res.send(error)
    }
}
const singleSpecs = async(req, res) => {
    try {
        const findSingle = await ProductSpecs.findOne({
            where: { id: req.params.id }
        })
        res.send(findSingle)

    } catch (error) {
        res.send(error)
    }
}

const allSpecs = async(req, res) => {
    try {
        const findDetail = await ProductSpecs.findAll()
        res.send(findDetail)
    } catch (error) {
        res.send(error)
    }
}
const updateSpecs = async(req, res) => {
    const { pro_id, review, user_id } = req.body


    try {

        const makeDetail = await ProductSpecs.update({
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

const delSpecs = async(req, res) => {
    try {

        const singleDel = await ProductSpecs.destroy({
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
    createProductSpecs,
    allSpecs,
    delSpecs,
    updateSpecs,
    singleSpecs

}