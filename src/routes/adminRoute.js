const express = require('express');
const adminController = require('../controllers/adminController')
const router = express.Router();
const auth = require('../middlewares/auth');
//homepage
router
    .route('/')
    .get(auth, adminController.homePage)


// ======-------PRODUCT---------=========

//all products
router
    .route('/all-product')
    .get(adminController.viewAllProduct)


// add product by admin
router
    .route('/add-product')
    .get(auth, adminController.addProduct)


// delete and update by admin in product table
router
    .route('/action/:id')
    .get(auth, adminController.updateProduct) // update  product View ejs
    .delete(auth, adminController.delProduct) // delete product

// ======-------PRODUCT IMAGE---------=========


// view page of add img
router
    .route('/product-img')
    .get(auth, adminController.addImg)

// add product img by admin
router
    .route('/add-img')
    .post(adminController.uplodFile, adminController.addImgDB)

// view all images of all products
router
    .route('/view-all-images')
    .get(adminController.viewAllImg)

// view for update form 
router
    .route('/update-from_img/:id')
    .get(adminController.viewUpdate)

// ======-------CATEGORY---------=========

// category add 
router
    .route('/add-category')
    .get(auth, adminController.addCategory)
    // view of single category in admin panel
router
    .route('/view-Signle-Category/:id')
    .get(auth, adminController.viewSIgnleCategory)

// // category update 
router
    .route('/update-category/:id')
    .get(auth, adminController.updateCategory)

// view category in table
router
    .route('/view-category-table')
    .get(adminController.viewAllCategory)
    //view single product
router
    .route('/single-pro/:id')
    .get(adminController.viewSinglePro)
    // singe view category 


//user
router
    .route('/view-user')
    .get(adminController.viewUser)

router
    .route('/del/:id')
    .get(adminController.deluser)

module.exports = router