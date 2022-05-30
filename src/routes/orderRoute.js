const express = require('express');
const controller = require('../controllers/orderController');
const router = express.Router();

router
    .route('/')
    .get(controller.allOrder)
    .post(controller.makeOrder)

router
    .route('/:id')
    .get(controller.singleOrder)
    .put(controller.updateOrder)
    .delete(controller.delOrder)

module.exports = router



module.exports = router