const express = require('express');
const controller = require('../controllers/orderDetailController');
const router = express.Router();

router
    .route('/')
    .get(controller.allDetail)
    .post(controller.createOrderDetail)

router
    .route(':id')
    .get(controller.singleDetail)
    .put(controller.updateDetail)
    .delete(controller.delDetail)
module.exports = router