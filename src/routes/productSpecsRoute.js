const express = require('express');
const controller = require('../controllers/productSpecsController');
const router = express.Router();

router
    .route('/')
    .get(controller.allSpecs)
    .post(controller.createProductSpecs)

router
    .route('/:id')
    .get(controller.singleSpecs)
    .put(controller.updateSpecs)
    .delete(controller.delSpecs)
module.exports = router