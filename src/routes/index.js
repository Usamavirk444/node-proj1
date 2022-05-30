const express = require('express');
//auth and user
const authRoute = require('./authRoute')
const userRoute = require('./userRoute')

const productRoute = require('./productRoute')
const productImg = require('./productImageRoute')
const productSpecs = require('./productSpecsRoute')
const productReview = require('./productReviewRoute')

const categoryRoute = require('./categoryRoute')

const orderRoute = require('./orderRoute')
const orderDetail = require('./orderDetailRoute')

const adminRoute = require('./adminRoute')

const router = express.Router();

const routes = [

    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/user',
        route: userRoute
    },
    {
        path: '/product',
        route: productRoute
    },
    {
        path: '/productImg',
        route: productImg
    },
    {
        path: '/prodcutSpecs',
        route: productSpecs
    },
    {
        path: '/productReview',
        route: productReview
    },
    {
        path: '/category',
        route: categoryRoute

    },

    {
        path: '/order',
        route: orderRoute
    },

    {
        path: '/orderDetail',
        route: orderDetail
    },
    {
        path: '/admin',
        route: adminRoute
    },


]

routes.forEach(element => {
    router.use(element.path, element.route)

});

module.exports = router