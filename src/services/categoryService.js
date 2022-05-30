const db = require('../models');
const Category = db.category;
const Product = db.product;
const ProductImg = db.img


//Create Category
const createCat = async(req, res) => {
    const name = req.body.name // form value
    const img = req.file.filename // name that we have make in storage
        // console.log(name + '=' + img) just checking its cooming 
    try {
        // after checking making req to create category in db
        const newCategory = await Category.create({
            name: name,
            img: img
        })
        return newCategory // return the value to controller

    } catch (error) {
        res.send(error) // if have any error
    }
}

// category by id
const singleCat = async(req, res) => {
    try {
        req.params.id
            // find a single category with primary key in try catch
        const findSingle = await Category.findByPk(req.params.id)
        console.log(findSingle)
        return findSingle
    } catch (error) {
        res.send(error)
    }
}

const findpro = async(req, res) => {
    const findPro = await Category.findByPk(req.params.id, {
        include: [{
            model: Product,
            include: [
                ProductImg
            ]
        }]
    })

    // res.send(findPro)
    return findPro

}

const singleproduct = async(req, res) => {
    try {
        const oneProduct = await Product.findByPk(req.params.pid);
        // res.send(oneProduct);
        return oneProduct;
    } catch (error) {
        res.send(error)
    }
}


//find ALl category
const allCat = async(req, res) => {
    try {
        // find all 
        const viewAll = await Category.findAll();
        if (viewAll) {
            // res.send(viewAll)
            return viewAll;
        } else {
            res.send('Not found 404')
        }

    } catch (error) {
        res.send(error)
    }
}


//Update category
const updateCat = async(req, res) => {

    // updating category by id
    try {
        const updateCat = await Category.update({
            name: req.body.name,
            img: req.body.img
        }, { where: { id: req.params.id } })
        res.send('update name of ' + req.params.id)
    } catch (error) {
        res.send(error)
    }

}

//delete Category
const deleteCat = async(req, res) => {
    try {
        console.log(req.params.id)
            // delete single category with parmas id 
        const delSingle = await Category.destroy({ where: { id: req.params.id } })
        return delSingle
    } catch (error) {
        res.send(error)
    }
}



module.exports = {
    allCat,
    createCat,
    singleproduct,
    findpro,
    singleCat,
    updateCat,
    deleteCat
}