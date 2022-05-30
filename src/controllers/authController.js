const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const User = db.user

const loginRegister = (req, res) => {
        res.render('pages/login-register')
    }
    // admin

const addproduct = (req, res) => {
    res.render('admin/product')
}
const admin = (req, res) => {
        res.render('admin/index')
    }
    // user
const createUser = async(req, res) => {
        try {
            const { name, email, phone, password, isAdmin } = req.body;



            const bpass = await bcrypt.hash(password, 3);
            const newUser = User.create({
                name: name,
                email: email,
                phone: phone,
                password: bpass,
                isAdmin: isAdmin
            })
            res.status(200)
                .json({
                    status: true,
                });

        } catch (err) {
            res.send('not working')
        }
    }
    // res.status(201)
    //     .json({
    //         status: true
    //     })


const loginUser = async(req, res) => {
    const { email, password } = req.body; // getting value
    const user = await User.findOne({ where: { email: email } }) //find email
    const id = user.id; // find id 
    console.log(user.id + " " + user.email)

    const cpass = await bcrypt.compare(password, user.password) // pass in hash

    if (cpass == true) {
        // generate Token with 2 days expiry age, payload is user id
        const tokenAge = 2 * 24 * 60 * 60 * 1000;
        const token = jwt.sign({ id }, 'tokensecret', {
            expiresIn: 2 * 24 * 60 * 60 //expires in 2 days
        });

        //send as cookie, httpOnly from server
        res.cookie('jwt', token, { httpOnly: true, maxAge: tokenAge });
        res.status(200)
            .json({
                status: true,
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin
                }
            });

    } else {
        res.send('email or password is incoorect')
    }

}

const profile = (req, res) => {
    res.render('pages/profile')
}
const getSignout = ((req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/category');

});

module.exports = {
    createUser,
    loginUser,
    loginRegister,
    profile,
    addproduct,
    admin,
    getSignout
}