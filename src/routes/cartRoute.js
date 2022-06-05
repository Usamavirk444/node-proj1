const express = require('express');
const controller = require('../controllers/catController');
const auth = require('../middlewares/auth');
const router = express.Router();

router
    .route('/')
    .get(auth, controller.allCart)

router
    .route('/cart-view')
    .get(auth, controller.cart)
router
    .route('/:id')
    .delete(controller.delCart)
    // .get(controller.singleOrder)
    // .put(controller.updateOrder)

module.exports = router



module.exports = router