const express = require('express');
const controller = require('../controllers/catItemController');
const auth = require('../middlewares/auth')
const router = express.Router();

router
    .route('/')
    .get(controller.allCartItem)
    .post(auth, controller.makeCartItem)

router
    .route('/:id')
    .delete(controller.delCartItem)
    // .get(controller.singleOrder)
    // .put(controller.updateOrder)

module.exports = router



module.exports = router