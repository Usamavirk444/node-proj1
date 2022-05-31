const CategoryService = require('../services/categoryService')
const productService = require('../services/productService')
const multer = require('multer')
const db = require('../models')
const Product = db.product
const Category = db.category
const ProductImg = db.img
const User = db.user



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
const uplodFile = upload.single('product');


// home page of admin
const homePage = (req, res) => {
    res.render('admin/index')
}

// ======-------PRODUCT---------=========

// view all products

const viewAllProduct = async(req, res) => {
    const allcat = await Category.findAll();
    console.log(allcat)
    const allPro = await productService.allPro(req)
        // console.log(al)
        // res.send(allPro)
    res.render('admin/product_view', { allPro, allcat })
}


// add product by admin in panel
const addProduct = async(req, res) => {
    // for category in dorp down
    await CategoryService.allCat(req, res)
        .then((allcat) => {
            // res.send(allcat)
            res.render('admin/product', { allcat })
        })
        .catch((er) => {
            console.log(er)
            res.send(er)
        })
}

// delete product from product services
const delProduct = async(req, res) => {
    await productService.deletePro(req, res)
        .then((data) => {
            res.json({
                status: true
            })
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
}


//update product by admin in panel
const updateProduct = async(req, res) => {
    const allcat = await CategoryService.allCat(req, res)
    await productService.singlePro(req, res)
        .then((show) => {
            // res.send(show)
            res.render('admin/product_update', { show, allcat })
        }).catch((err) => {
            console.log(err)
            res.send(err)

        });
}

//-------------Product Img-------------------------
// this is view page for adding img to some product
const addImg = async(req, res) => {
    const allpro = await Product.findAll()
    console.log(allpro);

    res.render('admin/product_img', { allpro })
}

// middlewear to  add product img into DB

const addImgDB = async(req, res) => {
    console.log(req.body.selctPro);

    console.log(req.file);
    const product = req.file.filename
    const addIMG = await ProductImg.create({
        pro_id: req.body.selctPro,
        defaul_image: product
    })
    res.send(addIMG)

}

// view all product images
const viewAllImg = async(req, res) => {
    await productService.allPro(req, res)
        .then((data) => {
            // res.send(data)
            res.render('admin/product_img_view', { data })
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
}

// view form of  update 
const viewUpdate = async(req, res) => {
    const allpro = await Product.findAll()
    const findpro = await ProductImg.findByPk(req.params.id)
        // res.send(findpro)
    res.render('admin/product_img_update', { findpro, allpro })
}


// update of product img
const updateImg = async(req, res) => {
    try {
        console.log(req.file.filename + " parmas-id: " + req.params.id + " pro_id " + req.body.selctPro)

        const product = req.file.filename
        const imgUpadate = await ProductImg.update({
            pro_id: req.body.selctPro,
            defaul_image: product
        }, {
            where: {
                id: req.params.id
            }
        })
        res.send(imgUpadate)
    } catch (error) {
        res.send(error)
    }
}

// ...........CATEGORIES.................-----------------------



// admin can add category in panel
const addCategory = async(req, res) => {
        res.render('admin/category')
    }
    // admin can updatecategory in panel
const updateCategory = async(req, res) => {
        const show = await Category.findOne({ where: { id: req.params.id } })
        res.render('admin/category_update', { show })
    }
    // view or render view single cateogry in admin panel
const viewSIgnleCategory = async(req, res) => {
    await CategoryService.singleCat(req, res)
        .then((data) => {
            console.log(data)
            res.render('admin/category_single_view', { data })
        })
}


const viewAllCategory = async(req, res) => {
    try {
        // find all  from category Service Layer
        const viewCat = await CategoryService.allCat(req)
            // console.log(viewCat)
        if (viewCat) {
            // res.send(viewAll)
            res.render('admin/category_view', { viewCat })
        } else {
            res.send('Not found 404')
        }

    } catch (error) {
        res.send(error)
    }
}

// --------User Details--------------------

const viewUser = async(req, res) => {
    const view = await User.findAll({ where: { isAdmin: false } })
    console.log(view)
    res.render('admin/user_view', { view })

}

const deluser = async(req, res) => {
    try {
        id = req.parmas.id;
        console.log(id);
        const sigleFind = await User.destroy({ where: { id: id } })
        res.send('data has been delete of ' + id)

    } catch (error) {
        res.send(error)
    }
}

const viewSinglePro = async(req, res) => {
    const singlePro = await productService.singlePro(req, res)
    res.render('admin/product_single_view', { singlePro })
}
module.exports = {
    homePage,
    addProduct,
    delProduct,
    updateProduct,
    addImg,
    addCategory,
    updateCategory,
    viewAllProduct,
    viewAllCategory,
    addImgDB,
    uplodFile,
    viewUser,
    deluser,
    viewSinglePro,
    viewSIgnleCategory,
    viewAllImg,
    viewUpdate,
    updateImg
}