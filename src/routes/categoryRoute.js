const express = require('express');
const controller = require('../controllers/categoryController');
const upload = require('../middlewares/img')
const router = express.Router();


router
    .route('/addCategory')
    .post(controller.uplodFile, controller.createCategory)

router
    .route('/')
    .get(controller.allCategory) // all category with product
router
    .route('/:id')
    .get(controller.singleCategory) // find single category and all their product
    // .get(controller.deleteCategory) // you can also delete with get method
    .delete(controller.deleteCategory)
    .put(controller.updateCategory)

router
    .route('/:id/products')
    .get(controller.findProducts)

router
    .route('/:id/products/:pid')
    .get(controller.singlePro)


module.exports = router