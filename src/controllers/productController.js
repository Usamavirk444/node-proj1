const db = require('../models');
const productService = require('../services/productService')

const Product = db.product
const Order = db.order
const OrderDetail = db.orderDetail


//  for creating Prodcut
const createPro = async(req, res) => {
        await productService.createPro(req, res)
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })

    }
    // get all product with img and category association
const getAllProduct = async(req, res) => {

        await productService.allPro(req)
            .then((selection) => {
                // res.send(selection)
                res.render('admin/product_view', { selection });
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })

    }
    // delete product with parmas id
const deleteProduct = async(req, res) => {
        await productService.deletePro(req, res)
            .then((delProduct) => {
                res.send(delProduct)
            })
            .catch((error) => {
                res.send(error)
            })
    }
    // single product with association product img
const singleProduct = async(req, res) => {

        await productService.singlePro(req, res)
            .then((oneProduct) => {
                // res.send(oneProduct);
                res.render('pages/singleProduct', { oneProduct });
            })
            .catch((error) => {
                res.send(error)
            })
    }
    // update product
const updateProduct = async(req, res) => {
    await productService.updatePro(req, res)
        .then((oneProduct) => {
            res.send(oneProduct);
        })
        .catch((error) => {
            console.log(error);
            res.send(error)
        })
}


const viewCheckOut = async(req, res) => {
    const productfind = await Product.findByPk(req.params.id)
    res.render('pages/checkout', { productfind })
}

const checkout = async(req, res) => {

    const createOrder = await productService.checkout(req, res)
    res.send(createOrder)

}
module.exports = {
    createPro,
    getAllProduct,
    deleteProduct,
    singleProduct,
    updateProduct,
    viewCheckOut,
    checkout
}