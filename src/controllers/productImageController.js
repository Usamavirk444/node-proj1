const db = require('../models');
const ProductImg = db.img

const createProductImg = async(req, res) => {
    const { pro_id, img_url, defaul_image } = req.body
    try {

        const makeDetail = await ProductImg.create({

            pro_id: pro_id,
            img_url: img_url,
            defaul_image: defaul_image
        })
        res.send(makeDetail)
    } catch (error) {
        res.send(error)
    }
}
const singleImg = async(req, res) => {
    try {
        const findSingle = await ProductImg.findOne({
            where: { id: req.params.id }
        })
        res.send(findSingle)

    } catch (error) {
        res.send(error)
    }
}

const allImg = async(req, res) => {
    try {
        const findDetail = await ProductImg.findAll()
        res.send(findDetail)
    } catch (error) {
        res.send(error)
    }
}
const updateImg = async(req, res) => {
    const { pro_id, img_url, defaul_image } = req.body

    try {

        const makeDetail = await ProductImg.update({

            pro_id: pro_id,
            img_url: img_url,
            defaul_image: defaul_image
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

const delImg = async(req, res) => {
    try {

        const singleDel = await ProductImg.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(singleDel)
    } catch (error) {
        res.send(error)
    }
}

// search controller

module.exports = {
    createProductImg,
    allImg,
    delImg,
    updateImg,
    singleImg,

}