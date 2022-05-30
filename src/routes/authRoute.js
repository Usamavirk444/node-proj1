const express = require('express');
const controller = require('../controllers/authController');
const router = express.Router();

router
    .route('/logout')
    .get(controller.getSignout)

router
    .route('/login-register')
    .get(controller.loginRegister)
    // admin route

router
    .route('/admin')
    .get(controller.admin)

router
    .route('/admin/addproduct')
    .get(controller.addproduct)

router
    .route('/register')
    .post(controller.createUser)

router
    .route('/login')
    // .get(controller.profile)
    .post(controller.loginUser)


router.route('/profile')
    .get(controller.profile)


module.exports = router