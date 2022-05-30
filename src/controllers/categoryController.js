const db = require('../models');
const Category = db.category;
const Product = db.product;
const ProductImg = db.img;
const multer = require('multer')
const categoryService = require('../services/categoryService')





const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/data/upload/')
    },
    filename: function(req, file, cb) {
        const ext = file.mimetype.split('/')[1]
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + ext)
    }
})


const upload = multer({ storage: storage })
const uplodFile = upload.single('upload');



//Create Category
const createCategory = async(req, res) => {
    await categoryService.createCat(req)
        .then((data) => {
            res.send(data)
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })

}

// search category by req that is coming in url
const singleCategory = async(req, res) => {
    // getting result from service where we have bussiness logic 
    await categoryService.singleCat(req, res)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log(err);
            res.send(err)
        })
}

const findProducts = async(req, res) => {
    const findPro = await categoryService.findpro(req, res)
    if (findPro) {
        // res.send(findPro)
        res.render('pages/product', { findPro })
    } else {
        res.send('Not found 404')
    }
}

const singlePro = async(req, res) => {
    try {
        const oneProduct = await categoryService.singlePro(req, res)

        // res.send(oneProduct);
        res.render('pages/singleProduct', { oneProduct });
    } catch (error) {
        res.send(error)
    }
}



//find ALl category
const allCategory = async(req, res) => {
    try {
        // find all 
        const fetured = await Product.findAll({
            where: { featured: 1 },
            include: {
                model: ProductImg
            }
        })

        const viewAll = await categoryService.allCat(req, res)
        if (viewAll) {
            // res.send(fetured)
            res.render('pages/home', { viewAll, fetured })
        } else {
            res.send('Not found 404')
        }

    } catch (error) {
        res.send(error)
    }
}


//Update category
const updateCategory = async(req, res) => {

    // updating category by id
    try {
        const updateCat = await Category.update({
            name: req.body.name,
            img: req.body.img
        }, { where: { id: req.params.id } })
        res.send(updateCat)
    } catch (error) {
        res.send(error)
    }

}

//delete Category
const deleteCategory = async(req, res) => {
    await categoryService.deleteCat(req, res)
        .then((data) => {
            res.json({
                status: true
            })
        })
        .catch((err) => {
            res.send(err)
        })
}



module.exports = {
    createCategory,
    singleCategory,
    allCategory,
    deleteCategory,
    updateCategory,
    singlePro,
    findProducts,
    uplodFile


}