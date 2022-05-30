const express = require('express');
const controller = require('../controllers/productImageController');
const router = express.Router();

router
    .route('/')
    .get(controller.allImg)
    .post(controller.createProductImg)

router
    .route('/:id')
    .get(controller.singleImg)
    .put(controller.updateImg)
    .delete(controller.delImg)
module.exports = router