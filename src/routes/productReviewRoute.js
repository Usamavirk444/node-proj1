const express = require('express');
const controller = require('../controllers/productReviewController');
const router = express.Router();

router
    .route('/')
    .get(controller.allReview)
    .post(controller.createProductReview)

router
    .route('/:id')
    .get(controller.singleReview)
    .put(controller.updateReview)
    .delete(controller.delReview)
module.exports = router