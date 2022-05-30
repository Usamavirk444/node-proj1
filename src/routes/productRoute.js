const express = require('express');
const controller = require('../controllers/productController');
const router = express.Router();
const auth = require('../middlewares/auth');
const { route } = require('./authRoute');

router
    .route('/addproduct')
    .post(controller.createPro) //create
router
    .route('/all-products')
    .get(controller.getAllProduct) // all prodcut

router
    .route('/:id')
    .get(auth, controller.singleProduct) //get signle
router
    .route('/del/:id')
    .get(controller.deleteProduct) //delete single
router
    .route('/update/:id')
    .put(controller.updateProduct) // update single


router
    .route('/checkout/:id')
    .get(auth, controller.viewCheckOut) // update single
router
    .route('/checkout-complete')
    .post(auth, controller.checkout) // post order


module.exports = router