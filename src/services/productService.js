const db = require('../models');

const Product = db.product
const Order = db.order
const Category = db.category
const ProductImg = db.img
const OrderDetail = db.orderDetail



const createPro = async(req, res) => {
    const { cat_id, name, featured, desc, price } = req.body;
    // const name = req.body.name;
    try {
        const addProduct = await Product.create({
            cat_id: cat_id,
            name: name,
            featured: featured,
            desc: desc,
            price: price
        })
        return addProduct

    } catch (err) {
        res.send(err)
    }
}

const allPro = async(req, res) => {
    try {
        const all = await Product.findAll({
                include: [{
                        model: ProductImg
                    },
                    {
                        model: Category
                    }
                ]
            })
            // console.log(all)
        return all
    } catch (error) {
        // console.log(error)
        res.send(error.message)
    }
}

const deletePro = async(req, res) => {
    try {
        const delProduct = await Product.destroy({ where: { id: req.params.id } })
        return delProduct

    } catch (error) {
        res.send(error)
    }

}
const singlePro =
    async(req, res) => {
        try {
            const oneProduct = await Product.findByPk(req.params.id, {
                include: [{
                        model: ProductImg
                    },
                    {
                        model: Category
                    }
                ]
            });
            return oneProduct

        } catch (error) {
            res.send(error)
        }
    }

const updatePro = async(req, res) => {
    try {
        const { cat_id, name, featured, desc, price } = req.body;
        // console.log(cat_id, name, featured, desc, price)
        // console.log(req.params.id)
        const oneProduct = await Product.update({
            cat_id: cat_id,
            name: name,
            featured: featured,
            desc: desc,
            price: price
        }, { where: { id: req.params.id } });
        return oneProduct
    } catch (error) {
        res.send(error)
    }
}
const search = async(req, res) => {
    const name = req.params.name;
    if (name) {
        const findproDb = await Product.findOne({ where: { name: name } })
        res.render('pages/search', { findproDb })
    }
}



const checkout = async(req, res) => {
    const user_id = res.locals.id
    const { email, phone, address, pro_id, price } = req.body
    const createOrder = await Order.create({
        user_id,
        email,
        phone,
        address

    })
    const ord_id = createOrder.id
    const Detail = await OrderDetail.create({
        ord_id,
        pro_id,
        price
    })
    res.send(Detail)

}

module.exports = {
    allPro,
    createPro,
    deletePro,
    singlePro,
    updatePro,

    checkout,
    search
}