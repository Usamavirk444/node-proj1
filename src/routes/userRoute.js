const express = require('express');
const controller = require('../controllers/userController');
const router = express.Router();

router.route('/')
    .get(controller.allUser)
router
    .route('/:id')
    .get(controller.singleUser)
router
    .route('/del/:id')
    .get(controller.deleteUser)
    // .put(controller.updateUser)

module.exports = router